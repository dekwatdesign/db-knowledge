# `psych_hhc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_hhc_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| psych_hhc_date | date | YES |  | NULL |  |  |
| pysch_hhc_address | text | YES |  | NULL |  |  |
| psych_hhc_time | time | YES |  | NULL |  |  |
| psych_hhc_cause | text | YES |  | NULL |  |  |
| psych_hhc_family_note | text | YES |  | NULL |  |  |
| psych_hhc_family_qty | int(11) | YES |  | NULL |  |  |
| psych_hhc_family_relation | text | YES |  | NULL |  |  |
| psych_hhc_home_environment | text | YES |  | NULL |  |  |
| psych_hhc_neighbor_relation | text | YES |  | NULL |  |  |
| psych_hhc_community | text | YES |  | NULL |  |  |
| psych_hhc_problem | text | YES |  | NULL |  |  |
| psych_hhc_helpful | text | YES |  | NULL |  |  |
| patient_relation_type_id | char(10) | YES |  | NULL |  |  |
| login | varchar(50) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| psych_hhc_type_id | int(11) | YES | MUL | NULL |  |  |
| psych_hhc_family_meet | varchar(100) | YES |  | NULL |  |  |
| pysch_hhc_tel | text | YES |  | NULL |  |  |
| hospcode | varchar(9) | YES |  | NULL |  |  |
| addressid | varchar(6) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_Refpsych_hhc_type2 | psych_hhc_type_id | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | psych_hhc_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
