# `hn_change_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn_change_log_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| change_type | varchar(20) | YES |  | NULL |  |  |
| change_to | varchar(9) | YES |  | NULL |  |  |
| table_name | varchar(50) | YES |  | NULL |  |  |
| table_data | longtext | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| PRIMARY | hn_change_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hn_change_log_id": 1,
    "hn": "540001722",
    "change_type": "MERGE",
    "change_to": "540001722",
    "table_name": "patient",
    "table_data": "[MASKED_FULLNAME]"
  },
  {
    "hn_change_log_id": 2,
    "hn": "540001722",
    "change_type": "MERGE",
    "change_to": "540001722",
    "table_name": "ovst",
    "table_data": null
  },
  {
    "hn_change_log_id": 3,
    "hn": "540001722",
    "change_type": "MERGE",
    "change_to": "540001722",
    "table_name": "ovstdiag",
    "table_data": null
  },
  {
    "hn_change_log_id": 4,
    "hn": "540001722",
    "change_type": "MERGE",
    "change_to": "540001722",
    "table_name": "oapp",
    "table_data": null
  },
  {
    "hn_change_log_id": 5,
    "hn": "540001722",
    "change_type": "MERGE",
    "change_to": "540001722",
    "table_name": "opitemrece",
    "table_data": null
  },
  {
    "hn_change_log_id": 6,
    "hn": "540001722",
    "change_type": "MERGE",
    "change_to": "540001722",
    "table_name": "ipt",
    "table_data": null
  },
  {
    "hn_change_log_id": 7,
    "hn": "540001722",
    "change_type": "MERGE",
    "change_to": "540001722",
    "table_name": "ptcardno",
    "table_data": "<?xml version=\"1.0\" standalone=\"yes\"?>  <DATAPACKET Version=\"2.0\"><METADATA><FIELDS><FIELD attrname=\"hn\" fieldtype=\"string\" WIDTH=\"9\"/><FIELD attrname=\"cardtype\" fieldtype=\"string\" WIDTH=\"2\"/><FIELD attrname=\"cardno\" fieldtype=\"string\" WIDTH=\"20\"/><FIELD attrname=\"expiredate\" fieldtype=\"date\"/><FIELD attrname=\"hos_guid\" fieldtype=\"string\" WIDTH=\"38\"/></FIELDS><PARAMS/></METADATA><ROWDATA><ROW hn=\"540206248\" cardtype=\"01\" cardno=\"1-1007-03686-88-4\" expiredate=\"20160218\"/></ROWDATA></DATAPACKET>"
  },
  {
    "hn_change_log_id": 8,
    "hn": "540001722",
    "change_type": "MERGE",
    "change_to": "540001722",
    "table_name": "pttypeno",
    "table_data": "<?xml version=\"1.0\" standalone=\"yes\"?>  <DATAPACKET Version=\"2.0\"><METADATA><FIELDS><FIELD attrname=\"hn\" fieldtype=\"string\" WIDTH=\"9\"/><FIELD attrname=\"expiredate\" fieldtype=\"date\"/><FIELD attrname=\"pttype\" fieldtype=\"string\" WIDTH=\"2\"/><FIELD attrname=\"pttypeno\" fieldtype=\"string\" WIDTH=\"20\"/><FIELD attrname=\"begindate\" fieldtype=\"date\"/><FIELD attrname=\"hospmain\" fieldtype=\"string\" WIDTH=\"5\"/><FIELD attrname=\"hospsub\" fieldtype=\"string\" WIDTH=\"5\"/><FIELD attrname=\"hos_guid\" fieldtype=\"string\" WIDTH=\"38\"/></FIELDS><PARAMS/></METADATA><ROWDATA><ROW hn=\"540206248\" expiredate=\"20111014\" pttype=\"10\" pttypeno=\"\" begindate=\"19900101\" hospmain=\"\" hospsub=\"\"/></ROWDATA></DATAPACKET>"
  }
]
```
