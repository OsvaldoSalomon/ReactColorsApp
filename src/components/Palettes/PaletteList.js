import React, {Component} from "react";
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import MiniPalette from "./MiniPalette";
import {withStyles} from "@material-ui/styles";
import styles from './styles/PaletteListStyles';

class PaletteList extends Component {
    goToPalette(id) {
        this.props.history.push(`/palette/${id}`);
    }

    render() {
        const {palettes, classes, deletePalette} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1 className={classes.heading}>React Colors</h1>
                        <Button variant="contained" color="primary">
                            <Link to="/palette/new">Create Palette</Link>
                        </Button>
                    </nav>
                    <TransitionGroup className={classes.palettes}>
                        {palettes.map(palette => (
                            <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                                <MiniPalette
                                    {...palette}
                                    handleClick={() => this.goToPalette(palette.id)}
                                    handleDelete={deletePalette}
                                    key={palette.id}
                                    id={palette.id}
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(PaletteList);
