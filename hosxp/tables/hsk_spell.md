# `hsk_spell`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| spell_id | int(1) | NO | PRI | 0 |  |  |
| spell_name | varchar(200) | YES |  | NULL |  |  |
| sort_id | int(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | spell_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "spell_id": 1,
    "spell_name": "เวรเช้า",
    "sort_id": 2
  },
  {
    "spell_id": 2,
    "spell_name": "เวรบ่าย",
    "sort_id": 3
  },
  {
    "spell_id": 3,
    "spell_name": "เวรดึก",
    "sort_id": 1
  }
]
```
