# `dxa_person_properties`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dxa_person_properties_id | int(11) | YES |  | NULL |  |  |
| dxa_disease_id | int(11) | YES |  | NULL |  |  |
| dxa_person_properties_name | varchar(200) | YES |  | NULL |  |  |
| dxa_person_properties_value | varchar(200) | YES |  | NULL |  |  |
| dxa_person_properties_score | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
