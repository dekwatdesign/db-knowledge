# `teenage_preg_register`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| teenage_preg_register_id | int(11) | NO | PRI | 0 |  |  |
| teenage_preg_register_status_check | char(1) | YES |  | NULL |  |  |
| person_anc_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| online_teenage_preg_register_id | int(11) | YES |  | NULL |  |  |
| online_teenage_preg_register_check | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_Refperson_anc41 | person_anc_id | no | 1 |
| PRIMARY | teenage_preg_register_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
