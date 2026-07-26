# `person_ncd_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_ncd_screen_id | int(11) | NO | PRI | 0 |  |  |
| person_ncd_id | int(11) | YES |  | NULL |  |  |
| person_ncd_screen_date | date | YES |  | NULL |  |  |
| person_ncd_heredity_type_id | int(11) | YES |  | NULL |  |  |
| bw | double(15,3) | YES |  | NULL |  |  |
| height | double(15,3) | YES |  | NULL |  |  |
| waist | double(15,3) | YES |  | NULL |  |  |
| bps | double(15,3) | YES |  | NULL |  |  |
| bpd | double(15,3) | YES |  | NULL |  |  |
| person_ncd_bp_type_id | int(11) | YES |  | NULL |  |  |
| person_ncd_high_lipid_type_id | int(11) | YES |  | NULL |  |  |
| person_ncd_pregnancy_dm_type_id | int(11) | YES |  | NULL |  |  |
| fbs | int(11) | YES |  | NULL |  |  |
| person_ncd_fbs_type_id | int(11) | YES |  | NULL |  |  |
| person_ncd_heart_type_id | int(11) | YES |  | NULL |  |  |
| person_ncd_cigar_type_id | int(11) | YES |  | NULL |  |  |
| person_ncd_waist_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | person_ncd_screen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
