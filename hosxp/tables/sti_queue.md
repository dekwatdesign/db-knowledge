# `sti_queue`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sti_queue_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | UNI | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vstdate | date | YES |  | NULL |  |  |
| vsttime | time | YES |  | NULL |  |  |
| urethritis | char(1) | YES |  | NULL |  |  |
| leukorhea | char(1) | YES |  | NULL |  |  |
| leukorhea_color | varchar(100) | YES |  | NULL |  |  |
| leukorhea_smell_abnormal | char(1) | YES |  | NULL |  |  |
| leukorhea_over_abnormal | char(1) | YES |  | NULL |  |  |
| genital_ulcer | char(1) | YES |  | NULL |  |  |
| inquinal_lymphadenophathy | char(1) | YES |  | NULL |  |  |
| genital_mass | char(1) | YES |  | NULL |  |  |
| genital_vesicle | char(1) | YES |  | NULL |  |  |
| genital_warts | char(1) | YES |  | NULL |  |  |
| genital_rash | char(1) | YES |  | NULL |  |  |
| genital_itching | char(1) | YES |  | NULL |  |  |
| abdominal_pain | char(1) | YES |  | NULL |  |  |
| post_coital_bleeding | char(1) | YES |  | NULL |  |  |
| other_text | varchar(250) | YES |  | NULL |  |  |
| scrotal_swelling | char(1) | YES |  | NULL |  |  |
| rectal_pain | char(1) | YES |  | NULL |  |  |
| behavior_current_partner_sti | char(1) | YES |  | NULL |  |  |
| behavior_sex_worker_without_condom | char(1) | YES |  | NULL |  |  |
| behavior_having_many_seual_partners | char(1) | YES |  | NULL |  |  |
| behavior_having_new_seual_partner | char(1) | YES |  | NULL |  |  |
| behavior_sex_without_condom | char(1) | YES |  | NULL |  |  |
| rectal_fluid | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn | vn | yes | 1 |
| PRIMARY | sti_queue_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
