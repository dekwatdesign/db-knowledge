# `psychiatric_clinic_community_hhc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_clinic_community_hhc_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_clinic_community_id | int(11) | YES |  | NULL |  |  |
| psychiatric_clinic_community_hhc_date | datetime | YES |  | NULL |  |  |
| psychiatric_clinic_community_hhc_seq | int(11) | YES |  | NULL |  |  |
| psychiatric_clinic_community_hhc_team1 | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_community_hhc_team2 | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_community_hhc_help_text | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_community_hhc_plan_text | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_clinic_community_hhc_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
