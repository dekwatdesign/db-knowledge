# `doctor_form_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_form_list_id | int(11) | NO | PRI | 0 |  |  |
| form_name | varchar(150) | YES | MUL | NULL |  |  |
| doctor | varchar(9) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_form_name | form_name | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_unique | form_name | yes | 1 |
| ix_unique | doctor | yes | 2 |
| ix_unique_index | doctor | yes | 1 |
| ix_unique_index | form_name | yes | 2 |
| PRIMARY | doctor_form_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
