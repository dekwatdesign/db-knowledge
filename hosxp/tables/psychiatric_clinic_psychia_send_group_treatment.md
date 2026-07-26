# `psychiatric_clinic_psychia_send_group_treatment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_clinic_psychia_send_group_treatment_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_clinic_psychia_send_group_treatment_date | date | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_id | int(11) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_send_group_treatment_send_doctor | varchar(6) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_send_group_treatment_doctor | varchar(6) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_send_group_treatment_psychia | char(1) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_send_group_treatment_psychia_check1 | char(1) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_send_group_treatment_psychia_check2 | char(1) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_send_group_treatment_art | char(1) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_send_group_treatment_art_check1 | char(1) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_send_group_treatment_art_check2 | char(1) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_send_group_treatment_art_check3 | char(1) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_send_group_treatment_reflex | char(1) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_send_group_treatment_reflex_check1 | char(1) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_send_group_treatment_reflex_check2 | char(1) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_send_group_treatment_reflex_check3 | char(1) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_send_group_treatment_idea | char(1) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_send_group_treatment_idea_check1 | char(1) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_send_group_treatment_idea_text1 | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_send_group_treatment_idea_check2 | char(1) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_send_group_treatment_idea_text2 | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_send_group_treatment_idea_check3 | char(1) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_send_group_treatment_idea_text3 | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_clinic_psychia_send_group_treatment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
