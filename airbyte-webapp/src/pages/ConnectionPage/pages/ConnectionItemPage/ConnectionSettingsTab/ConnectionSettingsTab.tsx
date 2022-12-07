import React from "react";

import { DeleteBlock } from "components/common/DeleteBlock";
import { UpdateConnectionDataResidency } from "components/connection/UpdateConnectionDataResidency";

import { PageTrackingCodes, useTrackPage } from "hooks/services/Analytics";
import { useConnectionEditService } from "hooks/services/ConnectionEdit/ConnectionEditService";
import { FeatureItem, useFeature } from "hooks/services/Feature";
import { useAdvancedModeSetting } from "hooks/services/useAdvancedModeSetting";
import { useDeleteConnection } from "hooks/services/useConnectionHook";

import { SchemaUpdateNotifications } from "./components/SchemaUpdateNotifications";
import { StateBlock } from "./components/StateBlock";
import styles from "./ConnectionSettingsTab.module.scss";

export const ConnectionSettingsTab: React.FC = () => {
  const { connection } = useConnectionEditService();
  const { mutateAsync: deleteConnection } = useDeleteConnection();
  const canUpdateDataResidency = useFeature(FeatureItem.AllowChangeDataGeographies);

  const [isAdvancedMode] = useAdvancedModeSetting();
  useTrackPage(PageTrackingCodes.CONNECTIONS_ITEM_SETTINGS);
  const onDelete = () => deleteConnection(connection);

  return (
    <div className={styles.container}>
      <SchemaUpdateNotifications />
      {canUpdateDataResidency && <UpdateConnectionDataResidency />}
      {isAdvancedMode && <StateBlock connectionId={connection.connectionId} />}
      <DeleteBlock type="connection" onDelete={onDelete} />
    </div>
  );
};
