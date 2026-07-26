# `bb_blood_request`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bb_blood_request_id | int(11) | NO | PRI | 0 |  |  |
| bb_request_labno | varchar(11) | YES | UNI | NULL |  |  |
| bb_request_hn | varchar(13) | YES |  | NULL |  |  |
| bb_request_date | date | YES |  | NULL |  |  |
| bb_request_time | time | YES |  | NULL |  |  |
| bb_request_use | date | YES |  | NULL |  |  |
| bb_request_spclty | char(2) | YES |  | NULL |  |  |
| bb_request_doctor | varchar(6) | YES |  | NULL |  |  |
| bb_request_tran | varchar(100) | YES |  | NULL |  |  |
| bb_request_lab | varchar(20) | YES |  | NULL |  |  |
| bb_request_tran_other | varchar(100) | YES |  | NULL |  |  |
| bb_request_lab_other | varchar(100) | YES |  | NULL |  |  |
| bb_request_an | varchar(13) | YES |  | NULL |  |  |
| bb_request_ward | varchar(4) | YES |  | NULL |  |  |
| bb_request_av | char(2) | YES |  | NULL |  |  |
| bb_request_drill | varchar(50) | YES |  | NULL |  |  |
| bb_request_datedr | date | YES |  | NULL |  |  |
| bb_request_diag | varchar(7) | YES |  | NULL |  |  |
| bb_request_diagtxt | varchar(150) | YES |  | NULL |  |  |
| bb_request_guid | varchar(200) | YES |  | NULL |  |  |
| bb_request_abo | varchar(10) | YES |  | NULL |  |  |
| bb_request_rh | varchar(10) | YES |  | NULL |  |  |
| bb_request_dat | varchar(10) | YES |  | NULL |  |  |
| bb_request_dat2 | varchar(2) | YES |  | NULL |  |  |
| bb_request_iat | varchar(10) | YES |  | NULL |  |  |
| bb_request_iat2 | varchar(2) | YES |  | NULL |  |  |
| bb_request_idn | varchar(10) | YES |  | NULL |  |  |
| bb_request_wkd | char(1) | YES |  | NULL |  |  |
| bb_request_abo2 | varchar(4) | YES |  | NULL |  |  |
| bb_request_hb | varchar(10) | YES |  | NULL |  |  |
| bb_request_hct | varchar(10) | YES |  | NULL |  |  |
| bb_request_ruser | varchar(30) | YES |  | NULL |  |  |
| bb_request_rdate | date | YES |  | NULL |  |  |
| bb_request_status | char(1) | YES |  | NULL |  |  |
| bb_request_ruser2 | varchar(30) | YES |  | NULL |  |  |
| bb_request_drill2 | varchar(50) | YES |  | NULL |  |  |
| bb_request_rctime | datetime | YES |  | NULL |  |  |
| bb_request_rcuser | varchar(50) | YES |  | NULL |  |  |
| bb_request_uappv | varchar(50) | YES |  | NULL |  |  |
| bb_request_dappv | datetime | YES |  | NULL |  |  |
| bb_request_auser | varchar(30) | YES |  | NULL |  |  |
| bb_request_brmk | varchar(50) | YES |  | NULL |  |  |
| bb_request_doctor_other | varchar(20) | YES |  | NULL |  |  |
| bb_request_plt | varchar(10) | YES |  | NULL |  |  |
| bb_request_approvelab_datetime | datetime | YES |  | NULL |  |  |
| bb_request_walkin | int(11) | YES |  | NULL |  |  |
| bb_request_walkin_name | varchar(250) | YES |  | NULL |  |  |
| bb_request_walkin_hospital_code | varchar(9) | YES |  | NULL |  |  |
| bb_request_walkin_hn | varchar(13) | YES |  | NULL |  |  |
| bb_request_approvelab | datetime | YES |  | NULL |  |  |
| bb_request_labnote | varchar(200) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_bb_request_labno | bb_request_labno | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | bb_blood_request_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
