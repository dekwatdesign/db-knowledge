# `blb_bag_antibody`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_bag_antibody_id | int(11) | NO | PRI | 0 |  |  |
| blb_bag_antibody_rt | varchar(250) | YES |  | NULL |  |  |
| blb_bag_antibody_scr_call | varchar(250) | YES |  | NULL |  |  |
| blb_bag_antibody_37c | varchar(250) | YES |  | NULL |  |  |
| blb_bag_antibody_iat | varchar(250) | YES |  | NULL |  |  |
| blb_bag_antibody_ccc | varchar(250) | YES |  | NULL |  |  |
| blb_bag_antibody_date | date | YES | MUL | NULL |  |  |
| blb_bag_antibody_time | time | YES |  | NULL |  |  |
| staff | varchar(150) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| blb_bag_id | int(11) | YES | MUL | NULL |  |  |
| blb_bag_antibody_doctor | varchar(6) | YES |  | NULL |  |  |
| blb_bag_antibody_scr_cell | varchar(250) | YES |  | NULL |  |  |
| blb_bag_antibody_gel | varchar(250) | YES |  | NULL |  |  |
| blb_bag_antibody_tube | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blb_bag_antibody_date | blb_bag_antibody_date | no | 1 |
| ix_blb_bag_id | blb_bag_id | no | 1 |
| PRIMARY | blb_bag_antibody_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
