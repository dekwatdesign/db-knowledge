# `death_source`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| death_source_id | int(11) | NO | PRI | 0 |  |  |
| death_source_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_death_source_name | death_source_name | yes | 1 |
| PRIMARY | death_source_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "death_source_id": 2,
    "death_source_name": "ใบมรณบัตร"
  },
  {
    "death_source_id": 0,
    "death_source_name": "ไม่ระบุ"
  },
  {
    "death_source_id": 3,
    "death_source_name": "สำรวจ"
  },
  {
    "death_source_id": 1,
    "death_source_name": "หนังสือรับรองการตาย"
  }
]
```
