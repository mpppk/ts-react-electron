import RaisedButton from 'material-ui/RaisedButton';
import * as React from 'react';

import {Card, CardHeader, CardMedia, CardText} from 'material-ui/Card';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

import * as fs from 'fs';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import winston from 'winston';

fs.readdir('.', (err, files) => {
    if (err) {
        throw err;
    }
});

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export interface IHelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<IHelloProps, undefined> {

    constructor(props: IHelloProps) {
        super(props);
        this.handleImageClick = this.handleImageClick.bind(this);
    }

    public render() {
        const styles = {
            gridList: {
                height: 450,
                overflowY: 'auto',
                width: 500,
            },
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
            },
        };

        const tilesData = [
            {
                author: 'jill111',
                img: 'imgs/dog.png',
                title: 'Breakfast',
            },
            {
                author: 'pashminu',
                img: 'imgs/dog1.png',
                title: 'Tasty burger',
            },
        ];

        const grids = () => {
            return tilesData.map((tile) => (
                <GridTile
                    key={tile.img}
                    title={tile.title}
                    subtitle={<span>by <b>{tile.author}</b></span>}
                    actionIcon={<IconButton><StarBorder color='white' /></IconButton>}
                >
                    <img src={tile.img} height='100px' width='100px' onClick={this.handleImageClick}/>
                </GridTile>
            ));
        };

        /**
         * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
         */
        const gridListExampleSimple = () => (
            <div style={styles.root as any}>
                <GridList
                    cellHeight={180}
                    style={styles.gridList as any}
                >
                    <Subheader>Images</Subheader>
                    {grids()}
                </GridList>
            </div>
        );

        const cardStyle = {
            width: '20%',
        };

        const sampleCard = () => (
            <Card style={cardStyle}>
                <CardHeader
                    title='username'
                    subtitle='@account'
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardMedia>
                    <img src='imgs/dog.png' alt='' />
                </CardMedia>
                <CardText expandable={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
            </Card>);

        return (
            <div>
                <h1>Hello from {this.props.compiler} and {this.props.framework}</h1>
                <RaisedButton label='Default' />
                {sampleCard()}
                {gridListExampleSimple()}
            </div>
        );
    }

    private handleImageClick(e: any) {
        winston.debug(e);
    }
}
