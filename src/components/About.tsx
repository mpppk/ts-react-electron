import * as React from 'react';

export class About extends React.Component<{}, undefined> {
    private static getNodeVersion() {
        return process.versions.node;
    }

    private static getChromiumVersion() {
        return process.versions.chrome;
    }

    private static getElectronVersion() {
        return process.versions.electron;
    }

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <div>
                <h2>About</h2>
                We are using Node.js {About.getNodeVersion()},
                Chromium {About.getChromiumVersion()},
                and Electron {About.getElectronVersion()}.
            </div>
        );
    }
}
