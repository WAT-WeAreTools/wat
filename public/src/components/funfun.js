import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const FunFun = () => (
  <Card>
    <CardHeader
      title="Higher Order Functions"
      subtitle="Higher Order functions explained by the essential YouTube Guru"
      actAsExpander={true}
      showExpandableButton={true}
      avatar="images/funfun.png"
    />
    <CardActions>
      <a href="https://www.youtube.com/watch?v=BMUiFMZr7vk"><FlatButton label="FunFun Functions"  /></a>

    </CardActions>
    <CardText expandable={true}>
      The Mad scientist of videoland, explaining all things JS. Fun, indeed.
    </CardText>
  </Card>
);

export default FunFun;
