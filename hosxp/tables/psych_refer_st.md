# `psych_refer_st`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_refer_st_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| department | varchar(3) | YES |  | NULL |  |  |
| psych_refer_st_date | date | YES |  | NULL |  |  |
| psych_refer_st_time | time | YES |  | NULL |  |  |
| psych_mdp_type_id | int(11) | YES | MUL | NULL |  |  |
| psych_haste_type_id | int(11) | YES | MUL | NULL |  |  |
| psych_refer_st_status_id | int(11) | YES | MUL | NULL |  |  |
| psych_refer_st_from_doctor | varchar(7) | YES |  | NULL |  |  |
| psych_refer_st_note | text | YES |  | NULL |  |  |
| psych_refer_st_reply_doctor | varchar(7) | YES |  | NULL |  |  |
| psych_refer_st_appointment | char(1) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| depcode | char(5) | YES |  | NULL |  |  |
| psych_refer_st_reply | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hn | hn | no | 1 |
| ix_psych_haste_type_id | psych_haste_type_id | no | 1 |
| ix_psych_mdp_type_id | psych_mdp_type_id | no | 1 |
| ix_psych_refer_st_status_id | psych_refer_st_status_id | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | psych_refer_st_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
