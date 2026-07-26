# `officer_activity_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| officer_activity_log_id | int(11) | NO | PRI | 0 |  |  |
| officer_id | int(11) | YES | MUL | NULL |  |  |
| officer_activity_log_datetime | datetime | YES |  | NULL |  |  |
| officer_activity_log_module | varchar(200) | YES |  | NULL |  |  |
| officer_activity_log_computer | varchar(150) | YES |  | NULL |  |  |
| officer_activity_log_table | varchar(100) | YES | MUL | NULL |  |  |
| officer_activity_log_operation | varchar(10) | YES |  | NULL |  |  |
| officer_activity_log_old_delta | longtext | YES |  | NULL |  |  |
| officer_activity_log_new_delta | longtext | YES |  | NULL |  |  |
| officer_activity_log_key_value | varchar(200) | YES |  | NULL |  |  |
| officer_task_id | int(11) | YES |  | NULL |  |  |
| officer_operation_id | int(11) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| depcode | varchar(3) | YES |  | NULL |  |  |
| officer_activity_track_id | int(11) | YES | MUL | NULL |  |  |
| officer_activity_log_parent_kv | varchar(200) | YES | MUL | NULL |  |  |
| active_screen_class | varchar(200) | YES |  | NULL |  |  |
| officer_activity_log_date | date | YES | MUL | NULL |  |  |
| log_field_change | text | YES |  | NULL |  |  |
| log_note | varchar(200) | YES |  | NULL |  |  |
| officer_activity_log_key_version | double(15,3) | YES |  | NULL |  |  |
| officer_activity_log_key_vs | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_kv | officer_activity_log_parent_kv | no | 1 |
| ix_log_date | officer_activity_log_date | no | 1 |
| ix_officer_id | officer_id | no | 1 |
| ix_officer_track_id | officer_activity_track_id | no | 1 |
| ix_table | officer_activity_log_table | no | 1 |
| PRIMARY | officer_activity_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "officer_activity_log_id": 1,
    "officer_id": 0,
    "officer_activity_log_datetime": "2018-10-03 16:06:59",
    "officer_activity_log_module": null,
    "officer_activity_log_computer": "COM-PC",
    "officer_activity_log_table": "lab_items_exp_map",
    "officer_activity_log_operation": "Add",
    "officer_activity_log_old_delta": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>  <DATAPACKET Version=\"2.0\"><METADATA><FIELDS><FIELD attrname=\"lab_items_exp_map_id\" fieldtype=\"i4\"><PARAM Name=\"ORIGIN\" Value=\"lab_items_exp_map.lab_items_exp_map_id\" Roundtrip=\"True\"/></FIELD><FIELD attrname=\"lab_items_code\" fieldtype=\"i4\"><PARAM Name=\"ORIGIN\" Value=\"lab_items_exp_map.lab_items_code\" Roundtrip=\"True\"/></FIELD></FIELDS><PARAMS/></METADATA><ROWDATA></ROWDATA></DATAPACKET>",
    "officer_activity_log_new_delta": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>  <DATAPACKET Version=\"2.0\"><METADATA><FIELDS><FIELD attrname=\"lab_items_exp_map_id\" fieldtype=\"i4\"><PARAM Name=\"ORIGIN\" Value=\"lab_items_exp_map.lab_items_exp_map_id\" Roundtrip=\"True\"/></FIELD><FIELD attrname=\"lab_items_code\" fieldtype=\"i4\"><PARAM Name=\"ORIGIN\" Value=\"lab_items_exp_map.lab_items_code\" Roundtrip=\"True\"/></FIELD></FIELDS><PARAMS CHANGE_LOG=\"1 0 4\"/></METADATA><ROWDATA><ROW RowState=\"4\" lab_items_exp_map_id=\"3458\" lab_items_code=\"88\"/></ROWDATA></DATAPACKET>",
    "officer_activity_log_key_value": "3458",
    "officer_task_id": null,
    "officer_operation_id": null,
    "staff": "[MASKED_FULLNAME]",
    "depcode": "",
    "officer_activity_track_id": 0,
    "officer_activity_log_parent_kv": "",
    "active_screen_class": "TBMS43ExportLabItemsMapEntryForm",
    "officer_activity_log_date": "2018-10-03",
    "log_field_change": "[{\"lab_items_exp_map_id\":3458,\"lab_items_code\":88}]",
    "log_note": "",
    "officer_activity_log_key_version": null,
    "officer_activity_log_key_vs": 0.1
  },
  {
    "officer_activity_log_id": 2,
    "officer_id": 0,
    "officer_activity_log_datetime": "2018-10-03 16:07:17",
    "officer_activity_log_module": null,
    "officer_activity_log_computer": "COM-PC",
    "officer_activity_log_table": "lab_items_exp_map",
    "officer_activity_log_operation": "Add",
    "officer_activity_log_old_delta": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>  <DATAPACKET Version=\"2.0\"><METADATA><FIELDS><FIELD attrname=\"lab_items_exp_map_id\" fieldtype=\"i4\"><PARAM Name=\"ORIGIN\" Value=\"lab_items_exp_map.lab_items_exp_map_id\" Roundtrip=\"True\"/></FIELD><FIELD attrname=\"lab_items_code\" fieldtype=\"i4\"><PARAM Name=\"ORIGIN\" Value=\"lab_items_exp_map.lab_items_code\" Roundtrip=\"True\"/></FIELD></FIELDS><PARAMS/></METADATA><ROWDATA></ROWDATA></DATAPACKET>",
    "officer_activity_log_new_delta": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>  <DATAPACKET Version=\"2.0\"><METADATA><FIELDS><FIELD attrname=\"lab_items_exp_map_id\" fieldtype=\"i4\"><PARAM Name=\"ORIGIN\" Value=\"lab_items_exp_map.lab_items_exp_map_id\" Roundtrip=\"True\"/></FIELD><FIELD attrname=\"lab_items_code\" fieldtype=\"i4\"><PARAM Name=\"ORIGIN\" Value=\"lab_items_exp_map.lab_items_code\" Roundtrip=\"True\"/></FIELD></FIELDS><PARAMS CHANGE_LOG=\"1 0 4\"/></METADATA><ROWDATA><ROW RowState=\"4\" lab_items_exp_map_id=\"3459\" lab_items_code=\"44\"/></ROWDATA></DATAPACKET>",
    "officer_activity_log_key_value": "3459",
    "officer_task_id": null,
    "officer_operation_id": null,
    "staff": "[MASKED_FULLNAME]",
    "depcode": "",
    "officer_activity_track_id": 0,
    "officer_activity_log_parent_kv": "",
    "active_screen_class": "TBMS43ExportLabItemsMapEntryForm",
    "officer_activity_log_date": "2018-10-03",
    "log_field_change": "[{\"lab_items_exp_map_id\":3459,\"lab_items_code\":44}]",
    "log_note": "",
    "officer_activity_log_key_version": null,
    "officer_activity_log_key_vs": 0.1
  },
  {
    "officer_activity_log_id": 3,
    "officer_id": 0,
    "officer_activity_log_datetime": "2018-10-03 16:07:28",
    "officer_activity_log_module": null,
    "officer_activity_log_computer": "COM-PC",
    "officer_activity_log_table": "lab_items_exp_map",
    "officer_activity_log_operation": "Add",
    "officer_activity_log_old_delta": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>  <DATAPACKET Version=\"2.0\"><METADATA><FIELDS><FIELD attrname=\"lab_items_exp_map_id\" fieldtype=\"i4\"><PARAM Name=\"ORIGIN\" Value=\"lab_items_exp_map.lab_items_exp_map_id\" Roundtrip=\"True\"/></FIELD><FIELD attrname=\"lab_items_code\" fieldtype=\"i4\"><PARAM Name=\"ORIGIN\" Value=\"lab_items_exp_map.lab_items_code\" Roundtrip=\"True\"/></FIELD></FIELDS><PARAMS/></METADATA><ROWDATA></ROWDATA></DATAPACKET>",
    "officer_activity_log_new_delta": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>  <DATAPACKET Version=\"2.0\"><METADATA><FIELDS><FIELD attrname=\"lab_items_exp_map_id\" fieldtype=\"i4\"><PARAM Name=\"ORIGIN\" Value=\"lab_items_exp_map.lab_items_exp_map_id\" Roundtrip=\"True\"/></FIELD><FIELD attrname=\"lab_items_code\" fieldtype=\"i4\"><PARAM Name=\"ORIGIN\" Value=\"lab_items_exp_map.lab_items_code\" Roundtrip=\"True\"/></FIELD></FIELDS><PARAMS CHANGE_LOG=\"1 0 4\"/></METADATA><ROWDATA><ROW RowState=\"4\" lab_items_exp_map_id=\"3460\" lab_items_code=\"83\"/></ROWDATA></DATAPACKET>",
    "officer_activity_log_key_value": "3460",
    "officer_task_id": null,
    "officer_operation_id": null,
    "staff": "[MASKED_FULLNAME]",
    "depcode": "",
    "officer_activity_track_id": 0,
    "officer_activity_log_parent_kv": "",
    "active_screen_class": "TBMS43ExportLabItemsMapEntryForm",
    "officer_activity_log_date": "2018-10-03",
    "log_field_change": "[{\"lab_items_exp_map_id\":3460,\"lab_items_code\":83}]",
    "log_note": "",
    "officer_activity_log_key_version": null,
    "officer_activity_log_key_vs": 0.1
  },
  {
    "officer_activity_log_id": 4,
    "officer_id": 0,
    "officer_activity_log_datetime": "2018-10-03 16:07:33",
    "officer_activity_log_module": null,
    "officer_activity_log_computer": "COM-PC",
    "officer_activity_log_table": "lab_items_exp_map",
    "officer_activity_log_operation": "Add",
    "officer_activity_log_old_delta": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>  <DATAPACKET Version=\"2.0\"><METADATA><FIELDS><FIELD attrname=\"lab_items_exp_map_id\" fieldtype=\"i4\"><PARAM Name=\"ORIGIN\" Value=\"lab_items_exp_map.lab_items_exp_map_id\" Roundtrip=\"True\"/></FIELD><FIELD attrname=\"lab_items_code\" fieldtype=\"i4\"><PARAM Name=\"ORIGIN\" Value=\"lab_items_exp_map.lab_items_code\" Roundtrip=\"True\"/></FIELD></FIELDS><PARAMS/></METADATA><ROWDATA></ROWDATA></DATAPACKET>",
    "officer_activity_log_new_delta": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>  <DATAPACKET Version=\"2.0\"><METADATA><FIELDS><FIELD attrname=\"lab_items_exp_map_id\" fieldtype=\"i4\"><PARAM Name=\"ORIGIN\" Value=\"lab_items_exp_map.lab_items_exp_map_id\" Roundtrip=\"True\"/></FIELD><FIELD attrname=\"lab_items_code\" fieldtype=\"i4\"><PARAM Name=\"ORIGIN\" Value=\"lab_items_exp_map.lab_items_code\" Roundtrip=\"True\"/></FIELD></FIELDS><PARAMS CHANGE_LOG=\"1 0 4\"/></METADATA><ROWDATA><ROW RowState=\"4\" lab_items_exp_map_id=\"3461\" lab_items_code=\"25\"/></ROWDATA></DATAPACKET>",
    "officer_activity_log_key_value": "3461",
    "officer_task_id": null,
    "officer_operation_id": null,
    "staff": "[MASKED_FULLNAME]",
    "depcode": "",
    "officer_activity_track_id": 0,
    "officer_activity_log_parent_kv": "",
    "active_screen_class": "TBMS43ExportLabItemsMapEntryForm",
    "officer_activity_log_date": "2018-10-03",
    "log_field_change": "[{\"lab_items_exp_map_id\":3461,\"lab_items_code\":25}]",
    "log_note": "",
    "officer_activity_log_key_version": null,
    "officer_activity_log_key_vs": 0.1
  },
  {
    "officer_activity_log_id": 5,
    "officer_id": 0,
    "officer_activity_log_datetime": "2018-10-03 16:07:46",
    "officer_activity_log_module": null,
    "officer_activity_log_computer": "COM-PC",
    "officer_activity_log_table": "lab_items_exp_map",
    "officer_activity_log_operation": "Add",
    "officer_activity_log_old_delta": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>  <DATAPACKET Version=\"2.0\"><METADATA><FIELDS><FIELD attrname=\"lab_items_exp_map_id\" fieldtype=\"i4\"><PARAM Name=\"ORIGIN\" Value=\"lab_items_exp_map.lab_items_exp_map_id\" Roundtrip=\"True\"/></FIELD><FIELD attrname=\"lab_items_code\" fieldtype=\"i4\"><PARAM Name=\"ORIGIN\" Value=\"lab_items_exp_map.lab_items_code\" Roundtrip=\"True\"/></FIELD></FIELDS><PARAMS/></METADATA><ROWDATA></ROWDATA></DATAPACKET>",
    "officer_activity_log_new_delta": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>  <DATAPACKET Version=\"2.0\"><METADATA><FIELDS><FIELD attrname=\"lab_items_exp_map_id\" fieldtype=\"i4\"><PARAM Name=\"ORIGIN\" Value=\"lab_items_exp_map.lab_items_exp_map_id\" Roundtrip=\"True\"/></FIELD><FIELD attrname=\"lab_items_code\" fieldtype=\"i4\"><PARAM Name=\"ORIGIN\" Value=\"lab_items_exp_map.lab_items_code\" Roundtrip=\"True\"/></FIELD></FIELDS><PARAMS CHANGE_LOG=\"1 0 4\"/></METADATA><ROWDATA><ROW RowState=\"4\" lab_items_exp_map_id=\"3462\" lab_items_code=\"104\"/></ROWDATA></DATAPACKET>",
    "officer_activity_log_key_value": "3462",
    "officer_task_id": null,
    "officer_operation_id": null,
    "staff": "[MASKED_FULLNAME]",
    "depcode": "",
    "officer_activity_track_id": 0,
    "officer_activity_log_parent_kv": "",
    "active_screen_class": "TBMS43ExportLabItemsMapEntryForm",
    "officer_activity_log_date": "2018-10-03",
    "log_field_change": "[{\"lab_items_exp_map_id\":3462,\"lab_items_code\":104}]",
    "log_note": "",
    "officer_activity_log_key_version": null,
    "officer_activity_log_key_vs": 0.1
  },
  {
    "officer_activity_log_id": 6,
    "officer_id": 0,
    "officer_activity_log_datetime": "2018-10-03 16:07:57",
    "officer_activity_log_module": null,
    "officer_activity_log_computer": "COM-PC",
    "officer_activity_log_table": "lab_items_exp_map",
    "officer_activity_log_operation": "Add",
    "officer_activity_log_old_delta": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>  <DATAPACKET Version=\"2.0\"><METADATA><FIELDS><FIELD attrname=\"lab_items_exp_map_id\" fieldtype=\"i4\"><PARAM Name=\"ORIGIN\" Value=\"lab_items_exp_map.lab_items_exp_map_id\" Roundtrip=\"True\"/></FIELD><FIELD attrname=\"lab_items_code\" fieldtype=\"i4\"><PARAM Name=\"ORIGIN\" Value=\"lab_items_exp_map.lab_items_code\" Roundtrip=\"True\"/></FIELD></FIELDS><PARAMS/></METADATA><ROWDATA></ROWDATA></DATAPACKET>",
    "officer_activity_log_new_delta": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>  <DATAPACKET Version=\"2.0\"><METADATA><FIELDS><FIELD attrname=\"lab_items_exp_map_id\" fieldtype=\"i4\"><PARAM Name=\"ORIGIN\" Value=\"lab_items_exp_map.lab_items_exp_map_id\" Roundtrip=\"True\"/></FIELD><FIELD attrname=\"lab_items_code\" fieldtype=\"i4\"><PARAM Name=\"ORIGIN\" Value=\"lab_items_exp_map.lab_items_code\" Roundtrip=\"True\"/></FIELD></FIELDS><PARAMS CHANGE_LOG=\"1 0 4\"/></METADATA><ROWDATA><ROW RowState=\"4\" lab_items_exp_map_id=\"3463\" lab_items_code=\"97\"/></ROWDATA></DATAPACKET>",
    "officer_activity_log_key_value": "3463",
    "officer_task_id": null,
    "officer_operation_id": null,
    "staff": "[MASKED_FULLNAME]",
    "depcode": "",
    "officer_activity_track_id": 0,
    "officer_activity_log_parent_kv": "",
    "active_screen_class": "TBMS43ExportLabItemsMapEntryForm",
    "officer_activity_log_date": "2018-10-03",
    "log_field_change": "[{\"lab_items_exp_map_id\":3463,\"lab_items_code\":97}]",
    "log_note": "",
    "officer_activity_log_key_version": null,
    "officer_activity_log_key_vs": 0.1
  },
  {
    "officer_activity_log_id": 7,
    "officer_id": 0,
    "officer_activity_log_datetime": "2018-10-03 16:08:38",
    "officer_activity_log_module": null,
    "officer_activity_log_computer": "COM-PC",
    "officer_activity_log_table": "lab_items_exp_map",
    "officer_activity_log_operation": "Add",
    "officer_activity_log_old_delta": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>  <DATAPACKET Version=\"2.0\"><METADATA><FIELDS><FIELD attrname=\"lab_items_exp_map_id\" fieldtype=\"i4\"><PARAM Name=\"ORIGIN\" Value=\"lab_items_exp_map.lab_items_exp_map_id\" Roundtrip=\"True\"/></FIELD><FIELD attrname=\"lab_items_code\" fieldtype=\"i4\"><PARAM Name=\"ORIGIN\" Value=\"lab_items_exp_map.lab_items_code\" Roundtrip=\"True\"/></FIELD></FIELDS><PARAMS/></METADATA><ROWDATA></ROWDATA></DATAPACKET>",
    "officer_activity_log_new_delta": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>  <DATAPACKET Version=\"2.0\"><METADATA><FIELDS><FIELD attrname=\"lab_items_exp_map_id\" fieldtype=\"i4\"><PARAM Name=\"ORIGIN\" Value=\"lab_items_exp_map.lab_items_exp_map_id\" Roundtrip=\"True\"/></FIELD><FIELD attrname=\"lab_items_code\" fieldtype=\"i4\"><PARAM Name=\"ORIGIN\" Value=\"lab_items_exp_map.lab_items_code\" Roundtrip=\"True\"/></FIELD></FIELDS><PARAMS CHANGE_LOG=\"1 0 4\"/></METADATA><ROWDATA><ROW RowState=\"4\" lab_items_exp_map_id=\"3464\" lab_items_code=\"9\"/></ROWDATA></DATAPACKET>",
    "officer_activity_log_key_value": "3464",
    "officer_task_id": null,
    "officer_operation_id": null,
    "staff": "[MASKED_FULLNAME]",
    "depcode": "",
    "officer_activity_track_id": 0,
    "officer_activity_log_parent_kv": "",
    "active_screen_class": "TBMS43ExportLabItemsMapEntryForm",
    "officer_activity_log_date": "2018-10-03",
    "log_field_change": "[{\"lab_items_exp_map_id\":3464,\"lab_items_code\":9}]",
    "log_note": "",
    "officer_activity_log_key_version": null,
    "officer_activity_log_key_vs": 0.1
  },
  {
    "officer_activity_log_id": 8,
    "officer_id": 0,
    "officer_activity_log_datetime": "2018-10-03 16:08:50",
    "officer_activity_log_module": null,
    "officer_activity_log_computer": "COM-PC",
    "officer_activity_log_table": "lab_items_exp_map",
    "officer_activity_log_operation": "Add",
    "officer_activity_log_old_delta": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>  <DATAPACKET Version=\"2.0\"><METADATA><FIELDS><FIELD attrname=\"lab_items_exp_map_id\" fieldtype=\"i4\"><PARAM Name=\"ORIGIN\" Value=\"lab_items_exp_map.lab_items_exp_map_id\" Roundtrip=\"True\"/></FIELD><FIELD attrname=\"lab_items_code\" fieldtype=\"i4\"><PARAM Name=\"ORIGIN\" Value=\"lab_items_exp_map.lab_items_code\" Roundtrip=\"True\"/></FIELD></FIELDS><PARAMS/></METADATA><ROWDATA></ROWDATA></DATAPACKET>",
    "officer_activity_log_new_delta": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>  <DATAPACKET Version=\"2.0\"><METADATA><FIELDS><FIELD attrname=\"lab_items_exp_map_id\" fieldtype=\"i4\"><PARAM Name=\"ORIGIN\" Value=\"lab_items_exp_map.lab_items_exp_map_id\" Roundtrip=\"True\"/></FIELD><FIELD attrname=\"lab_items_code\" fieldtype=\"i4\"><PARAM Name=\"ORIGIN\" Value=\"lab_items_exp_map.lab_items_code\" Roundtrip=\"True\"/></FIELD></FIELDS><PARAMS CHANGE_LOG=\"1 0 4\"/></METADATA><ROWDATA><ROW RowState=\"4\" lab_items_exp_map_id=\"3465\" lab_items_code=\"45\"/></ROWDATA></DATAPACKET>",
    "officer_activity_log_key_value": "3465",
    "officer_task_id": null,
    "officer_operation_id": null,
    "staff": "[MASKED_FULLNAME]",
    "depcode": "",
    "officer_activity_track_id": 0,
    "officer_activity_log_parent_kv": "",
    "active_screen_class": "TBMS43ExportLabItemsMapEntryForm",
    "officer_activity_log_date": "2018-10-03",
    "log_field_change": "[{\"lab_items_exp_map_id\":3465,\"lab_items_code\":45}]",
    "log_note": "",
    "officer_activity_log_key_version": null,
    "officer_activity_log_key_vs": 0.1
  }
]
```
