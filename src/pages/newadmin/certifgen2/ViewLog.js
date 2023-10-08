import './ViewLog.css';
import React, { useState } from "react";
import LogsArea from '../../../components/NewAdmin/LogsArea'
import AdminLayout from '../../../components/AdminLayout';

function ViewLog() {
  return (
    <AdminLayout>
        <LogsArea/>
    </AdminLayout>
  );
}

export default ViewLog;