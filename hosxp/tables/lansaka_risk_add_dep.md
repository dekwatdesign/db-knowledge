# `lansaka_risk_add_dep`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(6) | NO | PRI | 0 |  |  |
| risk_id | varchar(7) | YES | MUL | NULL |  |  |
| dep_id | int(6) | YES |  | NULL |  |  |
| dep_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id_name | risk_id | yes | 1 |
| ix_id_name | dep_id | yes | 2 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "id": 440,
    "risk_id": "000001",
    "dep_id": 18,
    "dep_name": "งานสารสนเทศ"
  },
  {
    "id": 441,
    "risk_id": "000001",
    "dep_id": 1,
    "dep_name": "หอผู้ป่วยนอก"
  }
]
```
