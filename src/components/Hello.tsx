import * as React from "react";
import RaisedButton from 'material-ui/RaisedButton';

import * as injectTapEventPlugin from 'react-tap-event-plugin';
import {Card, CardActions, CardHeader, CardMedia, CardText} from "material-ui/Card";
import {FlatButton} from "material-ui/FlatButton";

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {Dialog} from "material-ui/Dialog";
import * as fs from 'fs';

fs.readdir('.', function(err, files){
    if (err) throw err;
    console.log(files);
});

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export interface HelloProps { compiler: string; framework: string;}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, any> {

    constructor(props: any) {
        super(props);
        this.handleImageClick = this.handleImageClick.bind(this);
    }

    // state = {
    //     open: false,
    // };

    handleImageClick(e: any) {
        console.log(e);
    };

    render() {
        const styles = {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
            },
            gridList: {
                width: 500,
                height: 450,
                overflowY: 'auto',
            },
        };

        const tilesData = [
            {
                img: 'imgs/dog.png',
                title: 'Breakfast',
                author: 'jill111',
            },
            {
                img: 'imgs/dog1.png',
                title: 'Tasty burger',
                author: 'pashminu',
            }
        ];

        /**
         * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
         */
        const GridListExampleSimple = () => (
            <div style={styles.root as any}>
                <GridList
                    cellHeight={180}
                    style={styles.gridList as any}
                >
                    <Subheader>Images</Subheader>
                    {tilesData.map((tile) => (
                        <GridTile
                            key={tile.img}
                            title={tile.title}
                            subtitle={<span>by <b>{tile.author}</b></span>}
                            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                        >
                            <img src={tile.img} height="100px" width="100px" onClick={this.handleImageClick}/>
                        </GridTile>
                    ))}
                </GridList>
            </div>
        );

        const cardStyle = {
            width: '20%',
        };

        const sampleCard = () => (<Card style={cardStyle}>
            <CardHeader
                title="username"
                subtitle="@account"
                actAsExpander={true}
                showExpandableButton={true}
            />
            <CardMedia>
                <img src="imgs/dog.png" alt="" />
            </CardMedia>
            <CardText expandable={true}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
        </Card>);

        return <div>
            <h1>Hello from {this.props.compiler} and {this.props.framework}</h1>
            <RaisedButton label="Default" />
            {sampleCard()}
            {GridListExampleSimple()}
        </div>;
    }
}