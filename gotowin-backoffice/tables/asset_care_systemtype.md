# `asset_care_systemtype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| INFORMMED_ST_ID | int unsigned | NO | PRI | NULL | auto_increment |  |
| INFORMMED_ST_NAME | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | INFORMMED_ST_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "INFORMMED_ST_ID": 1,
    "INFORMMED_ST_NAME": "ซ่อมบำรุงประจำปี",
    "updated_at": "2022-02-15 16:25:26",
    "created_at": "2022-02-15 16:25:26"
  }
]
```
