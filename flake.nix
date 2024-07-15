{
  description = "A Nix-flake-based Node.js development environment";

  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:NixOS/nixpkgs";
  };

  outputs = { self, flake-utils, nixpkgs }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };

        common = with pkgs; [ nodejs pnpm ];

        run = pkg: "${pkgs.${pkg}}/bin/${pkg}";

        scripts = with pkgs; [
          (writeScriptBin "clean" ''
            rm -rf dist
          '')

          (writeScriptBin "setup" ''
            clean
            ${run "pnpm"} install
          '')

          (writeScriptBin "build" ''
            setup
            ${run "pnpm"} run build
          '')

          (writeScriptBin "dev" ''
            setup
            ${run "pnpm"} run dev $@
          '')

          (writeScriptBin "format" ''
            setup
            ${run "pnpm"} run format
          '')

          (writeScriptBin "check-types" ''
            ${run "pnpm"} run typecheck
          '')

          (writeScriptBin "preview" ''
            build
            ${run "pnpm"} run preview
          '')
        ];

        runLocal = pkgs.writeScriptBin "run-local" ''
          rm -rf dist
          ${run "pnpm"} install
          ${run "pnpm"} run build
          ${run "pnpm"} run preview
        '';
      in {
        devShells = {
          # The shell for developing this site
          default = pkgs.mkShell { buildInputs = common ++ scripts; };
        };

        apps.default = flake-utils.lib.mkApp { drv = runLocal; };
      });
}
