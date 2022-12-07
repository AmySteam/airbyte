import React from "react";
import { FormattedMessage } from "react-intl";

import { ControlLabels } from "components";
import { Card } from "components/ui/Card";
import { CheckBox } from "components/ui/CheckBox";
import { Text } from "components/ui/Text";

import styles from "./SchemaUpdateNotifications.module.scss";

export const SchemaUpdateNotifications: React.FC = () => {
  return (
    <Card withPadding className={styles.container}>
      <ControlLabels
        nextLine
        label={<FormattedMessage id="connection.schemaUpdateNotifications.title" />}
        message={<FormattedMessage id="connection.schemaUpdateNotifications.info" />}
      />
      <div className={styles.checkboxField}>
        <CheckBox onChange={() => console.log("hi")} checked />
        <Text className={styles.label} size="sm">
          <FormattedMessage id="connection.schemaUpdateNotifications.webhook.label" />
        </Text>
      </div>
      <div className={styles.checkboxField}>
        <CheckBox onChange={() => console.log("hi")} checked />
        <Text className={styles.label} size="sm">
          <FormattedMessage id="connection.schemaUpdateNotifications.email.label" />
        </Text>
      </div>
    </Card>
  );
};
