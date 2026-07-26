# `accident_transport_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| accident_transport_type_id | int(11) | NO | PRI | 0 |  |  |
| accident_transport_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| export_code | varchar(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_accident_transport_type_name | accident_transport_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | accident_transport_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "accident_transport_type_id": 1,
    "accident_transport_type_name": "รถยนต์โดยสาร",
    "hos_guid": null,
    "export_code": null
  },
  {
    "accident_transport_type_id": 2,
    "accident_transport_type_name": "รถบรรทุก",
    "hos_guid": null,
    "export_code": null
  },
  {
    "accident_transport_type_id": 3,
    "accident_transport_type_name": "รถเก๋ง",
    "hos_guid": null,
    "export_code": null
  },
  {
    "accident_transport_type_id": 4,
    "accident_transport_type_name": "รถปิคอัพ",
    "hos_guid": null,
    "export_code": null
  },
  {
    "accident_transport_type_id": 5,
    "accident_transport_type_name": "รถจักรยานยนต์",
    "hos_guid": null,
    "export_code": null
  },
  {
    "accident_transport_type_id": 6,
    "accident_transport_type_name": "รถจักรยาน",
    "hos_guid": null,
    "export_code": null
  },
  {
    "accident_transport_type_id": 7,
    "accident_transport_type_name": "รถที่ใช้ในการเกษตร",
    "hos_guid": null,
    "export_code": null
  },
  {
    "accident_transport_type_id": 8,
    "accident_transport_type_name": "รถสามล้อ",
    "hos_guid": null,
    "export_code": null
  }
]
```
