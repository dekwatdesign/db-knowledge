# `lab_items_specimen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_spm_id | int(11) | NO | PRI | 0 |  |  |
| lab_items_number | int(11) | YES | MUL | NULL |  |  |
| lab_specimen_number | int(11) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| lab_items_number | lab_items_number | no | 1 |
| lab_specimen_number | lab_specimen_number | no | 1 |
| PRIMARY | lab_spm_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
