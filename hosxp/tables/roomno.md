# `roomno`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| roomno | varchar(4) | NO | PRI |  |  |  |
| name | varchar(150) | YES |  | NULL |  |  |
| ward | varchar(4) | YES |  | NULL |  |  |
| spclty | char(2) | YES |  | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| display_number | int(11) | YES |  | NULL |  |  |
| roomtype | int(11) | YES |  | NULL |  |  |
| room_status_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| lock_reserve | char(1) | YES |  | NULL |  |  |
| export_code | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | roomno | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "roomno": "001",
    "name": "กลับบ้าน",
    "ward": "01",
    "spclty": "09",
    "an": "",
    "display_number": null,
    "roomtype": null,
    "room_status_type_id": null,
    "hos_guid": null,
    "lock_reserve": null,
    "export_code": null
  },
  {
    "roomno": "301",
    "name": "กลับบ้าน",
    "ward": "02",
    "spclty": "09",
    "an": "",
    "display_number": null,
    "roomtype": null,
    "room_status_type_id": null,
    "hos_guid": null,
    "lock_reserve": null,
    "export_code": null
  },
  {
    "roomno": "302",
    "name": "ธรรมดา",
    "ward": "02",
    "spclty": "09",
    "an": "",
    "display_number": null,
    "roomtype": null,
    "room_status_type_id": null,
    "hos_guid": null,
    "lock_reserve": null,
    "export_code": null
  },
  {
    "roomno": "401",
    "name": "กลับบ้าน",
    "ward": "03",
    "spclty": "09",
    "an": "",
    "display_number": null,
    "roomtype": null,
    "room_status_type_id": null,
    "hos_guid": null,
    "lock_reserve": null,
    "export_code": null
  },
  {
    "roomno": "501",
    "name": "กลับบ้าน",
    "ward": "04",
    "spclty": "09",
    "an": "",
    "display_number": null,
    "roomtype": null,
    "room_status_type_id": null,
    "hos_guid": null,
    "lock_reserve": null,
    "export_code": null
  },
  {
    "roomno": "502",
    "name": "ธรรมดา",
    "ward": "04",
    "spclty": "09",
    "an": "",
    "display_number": null,
    "roomtype": null,
    "room_status_type_id": null,
    "hos_guid": null,
    "lock_reserve": null,
    "export_code": null
  },
  {
    "roomno": "503",
    "name": "พิเศษ",
    "ward": "04",
    "spclty": "09",
    "an": null,
    "display_number": null,
    "roomtype": null,
    "room_status_type_id": null,
    "hos_guid": null,
    "lock_reserve": null,
    "export_code": null
  },
  {
    "roomno": "601",
    "name": "Home Ward",
    "ward": "05",
    "spclty": "09",
    "an": "",
    "display_number": null,
    "roomtype": null,
    "room_status_type_id": null,
    "hos_guid": null,
    "lock_reserve": null,
    "export_code": null
  }
]
```
