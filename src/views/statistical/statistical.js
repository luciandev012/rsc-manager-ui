import React from "react";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

export default function EmployeeManagementPage() {
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary"></CardHeader>
          <CardBody></CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
