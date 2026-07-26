# `psychiatric_form_electricity_treatment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_form_electricity_treatment_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_form_electricity_treatment_date | date | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_datetime | datetime | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_before_t | varchar(20) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_before_p | int(11) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_before_r | int(11) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_before_bp | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_before_bw | varchar(20) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_before_clean_head | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_before_clean_teeth | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_before_npo | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_before_clone_teeth | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_before_underwear | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_before_pee | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_before_heart | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_before_operator | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_value_ele | varchar(20) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_duration | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_type_seizer | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_after_p | int(11) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_after_r | int(11) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_after_bp | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_after_operator | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_after_15_p | int(11) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_after_15_r | int(11) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_after_15_bp | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_after_15_operator | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_after_30_p | int(11) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_after_30_r | int(11) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_after_30_bp | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_after_30_walk | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_after_30_vomit | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_after_30_sick | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_after_30_stun | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_after_30_headache | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_after_30_backahe | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_after_30_other | char(1) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_after_30_other_desc | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_after_30_operator | varchar(250) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| doctor | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_electricity_treatment_before_clone_teeth_no | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_form_electricity_treatment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
