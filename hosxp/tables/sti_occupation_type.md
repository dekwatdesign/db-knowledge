# `sti_occupation_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sti_occupation_type_id | int(11) | NO | PRI | 0 |  |  |
| sti_occupation_type_name | varchar(200) | YES | UNI | NULL |  |  |
| occupation_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_sti_occupation_type_name | sti_occupation_type_name | yes | 1 |
| PRIMARY | sti_occupation_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "sti_occupation_type_id": 1,
    "sti_occupation_type_name": "เกษตรกรรม",
    "occupation_code": null,
    "hos_guid": null
  },
  {
    "sti_occupation_type_id": 2,
    "sti_occupation_type_name": "รับราชการ/รัฐวิสาหกิจ",
    "occupation_code": null,
    "hos_guid": null
  },
  {
    "sti_occupation_type_id": 3,
    "sti_occupation_type_name": "รับจ้าง/กรรมกร",
    "occupation_code": null,
    "hos_guid": null
  },
  {
    "sti_occupation_type_id": 4,
    "sti_occupation_type_name": "ค้าขาย/ธุรกิจ",
    "occupation_code": null,
    "hos_guid": null
  },
  {
    "sti_occupation_type_id": 5,
    "sti_occupation_type_name": "งานบ้าน",
    "occupation_code": null,
    "hos_guid": null
  },
  {
    "sti_occupation_type_id": 6,
    "sti_occupation_type_name": "นักเรียน/นักศึกษา",
    "occupation_code": null,
    "hos_guid": null
  },
  {
    "sti_occupation_type_id": 7,
    "sti_occupation_type_name": "ทหาร/ตำรวจ",
    "occupation_code": null,
    "hos_guid": null
  },
  {
    "sti_occupation_type_id": 8,
    "sti_occupation_type_name": "ประมง",
    "occupation_code": null,
    "hos_guid": null
  }
]
```
