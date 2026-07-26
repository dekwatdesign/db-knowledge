# `ovstost`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovstost | varchar(4) | NO | PRI |  |  |  |
| name | varchar(200) | YES |  | NULL |  |  |
| death_status | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| export_code | varchar(5) | YES |  | NULL |  |  |
| item_no | int(11) | YES |  | NULL |  |  |
| opbkk_code | char(1) | YES |  | NULL |  |  |
| default_state | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ovstost | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ovstost": "00",
    "name": "รอผลตรวจ",
    "death_status": null,
    "hos_guid": null,
    "export_code": null,
    "item_no": null,
    "opbkk_code": null,
    "default_state": null
  },
  {
    "ovstost": "01",
    "name": "Admit แผนกอายุรกรรม",
    "death_status": null,
    "hos_guid": null,
    "export_code": null,
    "item_no": null,
    "opbkk_code": null,
    "default_state": null
  },
  {
    "ovstost": "02",
    "name": "Admit แผนกศัลยกรรม",
    "death_status": null,
    "hos_guid": null,
    "export_code": null,
    "item_no": null,
    "opbkk_code": null,
    "default_state": null
  },
  {
    "ovstost": "03",
    "name": "Admit แผนกสูติกรรม",
    "death_status": null,
    "hos_guid": null,
    "export_code": null,
    "item_no": null,
    "opbkk_code": null,
    "default_state": null
  },
  {
    "ovstost": "04",
    "name": "Admit แผนกนรีเวชกรรม",
    "death_status": null,
    "hos_guid": null,
    "export_code": null,
    "item_no": null,
    "opbkk_code": null,
    "default_state": null
  },
  {
    "ovstost": "05",
    "name": "Admit แผนกกุมารเวชกรรม",
    "death_status": null,
    "hos_guid": null,
    "export_code": null,
    "item_no": null,
    "opbkk_code": null,
    "default_state": null
  },
  {
    "ovstost": "06",
    "name": "Admit แผนกโสตนาสิก",
    "death_status": null,
    "hos_guid": null,
    "export_code": null,
    "item_no": null,
    "opbkk_code": null,
    "default_state": null
  },
  {
    "ovstost": "07",
    "name": "Admit แผนกจักษุ",
    "death_status": null,
    "hos_guid": null,
    "export_code": null,
    "item_no": null,
    "opbkk_code": null,
    "default_state": null
  }
]
```
