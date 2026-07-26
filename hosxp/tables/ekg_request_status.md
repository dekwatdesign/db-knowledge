# `ekg_request_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ekg_request_status_id | int(11) | NO | PRI | 0 |  |  |
| ekg_request_status_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ekg_request_status_name | ekg_request_status_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ekg_request_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "ekg_request_status_id": 1,
    "ekg_request_status_name": "รอการรายงานผล",
    "hos_guid": null
  },
  {
    "ekg_request_status_id": 2,
    "ekg_request_status_name": "รายงานผลแล้ว",
    "hos_guid": null
  },
  {
    "ekg_request_status_id": 3,
    "ekg_request_status_name": "ยกเลิกการสั่ง",
    "hos_guid": null
  }
]
```
