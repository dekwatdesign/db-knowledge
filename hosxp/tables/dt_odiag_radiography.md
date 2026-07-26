# `dt_odiag_radiography`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_odiag_radiography_id | int(11) | NO | PRI | 0 |  |  |
| dt_odiag_radiography_radiograp | longblob | YES |  | NULL |  |  |
| dt_odiag_main_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_odiag5 | dt_odiag_main_id | no | 1 |
| PRIMARY | dt_odiag_radiography_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
