# `druginteraction_skip`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| druginteraction_skip_id | int(11) | NO | PRI | 0 |  |  |
| doctor | varchar(7) | YES | MUL | NULL |  |  |
| drugname1 | varchar(250) | YES |  | NULL |  |  |
| drugname2 | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor | doctor | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | druginteraction_skip_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "druginteraction_skip_id": 1,
    "doctor": "089",
    "drugname1": "DIGOXIN",
    "drugname2": "FUROSEMIDE",
    "hos_guid": null
  }
]
```
