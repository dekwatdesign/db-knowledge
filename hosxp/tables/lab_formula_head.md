# `lab_formula_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_formula_head_id | int(11) | NO | PRI | 0 |  |  |
| lab_formula_name | varchar(100) | YES | MUL | NULL |  |  |
| doctor | varchar(7) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_unique | lab_formula_name | yes | 1 |
| ix_unique | doctor | yes | 2 |
| ix_unique_index | doctor | yes | 1 |
| ix_unique_index | lab_formula_name | yes | 2 |
| PRIMARY | lab_formula_head_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "lab_formula_head_id": 1,
    "lab_formula_name": "",
    "doctor": "046",
    "hos_guid": null
  }
]
```
