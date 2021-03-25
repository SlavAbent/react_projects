import React, {useState} from 'react'
import './Card.css'
// import CardInfo from './CardInfo'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'
import { GrClose } from 'react-icons/gr';

export default function Card ({albumId, id, title, url, thumbnailUrl, removeCard}) {
    const [active, setActive] = useState(false)
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            marginRight: theme.spacing(1),
          },
        },
    }));
    const classes = useStyles();
    const Card = styled.section`
        background-color: #FFF;
        padding: 10px;
        display: flex;
        align-items: center;
        width: 600px;
        height: 200px;
    `
    return (
        <>
            <Card className="card">
                <div className="section__img">
                    <img src={thumbnailUrl} alt={title} className="image"/>
                </div>
                <div className="section__body">
                    <h2 className="section__title">{title}</h2>
                    <div className={classes.root}>
                        <Button variant="contained" color="primary" onClick={() => setActive(!active)} >
                            View profile
                        </Button>
                        <Button variant="contained" color="secondary" href="#contained-buttons" onClick={() => removeCard(id)}>
                            delete
                        </Button>
                    </div>
                </div>
                
            </Card>
            {/* { active ? <CardInfo setActive={setActive} active={active} itemProp={albumId, id, title, url, thumbnailUrl}/>
                    
                : null } */}

            { 
            active 
            ?  <section className="sectionInfo__wrapper">
                    <div className="sectionInfo__image">
                        <img src={thumbnailUrl} alt={title} className="image__info"/>
                    </div>
                    <div className="sectionInfo__body">
                        <p className="sectionInfo__title">{title}</p>
                    </div>
                    <GrClose className="sectionInfo__close" onClick={() => setActive(!active)}/>
                </section>    
            : null
        }
        </>
    )
}
