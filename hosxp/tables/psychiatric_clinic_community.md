# `psychiatric_clinic_community`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_clinic_community_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_clinic_community_date | date | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| psychiatric_clinic_community_consult_help_text | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_community_consult_staff | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_clinic_community_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
