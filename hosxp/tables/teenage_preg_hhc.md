# `teenage_preg_hhc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| teenage_preg_hhc_id | int(11) | NO | PRI | 0 |  |  |
| teenage_preg_register_id | int(11) | YES | MUL | NULL |  |  |
| teenage_preg_hhc_how_to_visit_id | int(11) | YES | MUL | NULL |  |  |
| teenage_preg_hhc_date | date | YES |  | NULL |  |  |
| teenage_preg_hhc_time | time | YES |  | NULL |  |  |
| teenage_preg_hhc_no | int(11) | YES |  | NULL |  |  |
| teenage_preg_lookup_visit_type_id | int(11) | YES |  | NULL |  |  |
| person_visit_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_Refteenage_preg_hhc_how_to_visit792 | teenage_preg_hhc_how_to_visit_id | no | 1 |
| ix_Refteenage_preg_register222 | teenage_preg_register_id | no | 1 |
| PRIMARY | teenage_preg_hhc_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
