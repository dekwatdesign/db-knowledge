# `doctor_rate_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(200) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "id": 1,
    "name": "อัตราคงที่",
    "hos_guid": null
  },
  {
    "id": 2,
    "name": "คิดตามค่าใช้จ่าย",
    "hos_guid": null
  }
]
```
