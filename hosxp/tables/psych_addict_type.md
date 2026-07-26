# `psych_addict_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_addict_type_id | int(11) | NO | PRI | 0 |  |  |
| psych_addict_type_name | varchar(255) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | psych_addict_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "psych_addict_type_id": 1,
    "psych_addict_type_name": "ยาบ้า",
    "active": null
  },
  {
    "psych_addict_type_id": 2,
    "psych_addict_type_name": "ไอซ์",
    "active": null
  },
  {
    "psych_addict_type_id": 3,
    "psych_addict_type_name": "ยาอี",
    "active": null
  },
  {
    "psych_addict_type_id": 4,
    "psych_addict_type_name": "กระท่อม",
    "active": null
  },
  {
    "psych_addict_type_id": 5,
    "psych_addict_type_name": "สารระเหย",
    "active": null
  },
  {
    "psych_addict_type_id": 6,
    "psych_addict_type_name": "เฮโรอีน",
    "active": null
  },
  {
    "psych_addict_type_id": 7,
    "psych_addict_type_name": "ฝิ่น",
    "active": null
  }
]
```
