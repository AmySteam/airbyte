import React from "react";
import { FormattedMessage } from "react-intl";

import { ControlLabels } from "components";
import { Card } from "components/ui/Card";
import { CheckBox } from "components/ui/CheckBox";

import styles from "./SchemaUpdateNotifications.module.scss";

export const SchemaUpdateNotifications: React.FC = () => {
  return (
    <Card withPadding className={styles.container}>
      <ControlLabels
        nextLine
        label={<FormattedMessage id="connection.geographyTitle" />}
        message={<FormattedMessage id="connectionForm.schemaUpdateNotifications.info" />}
      />
      <div>Webhook</div>
      <div>
        <CheckBox onChange={() => console.log("hi")} checked />
        Email
      </div>
    </Card>
  );
};
