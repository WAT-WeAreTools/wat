import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const ResourceCard = () => (
  <Card>
    <CardHeader
      title="Eloquent JavaScript"
      subtitle="JS Bible"
      actAsExpander={true}
      showExpandableButton={true}
      avatar="images/elojs.png"
    />
    <CardActions>
      <a href="http://eloquentjavascript.net/"><FlatButton label="Elo Js"  /></a>
      
    </CardActions>
    <CardText expandable={true}>
      This is a book about JavaScript, programming, and the wonders of the digital.
    </CardText>
  </Card>
);

export default ResourceCard;
