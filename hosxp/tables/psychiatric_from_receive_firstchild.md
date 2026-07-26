# `psychiatric_from_receive_firstchild`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_from_receive_firstchild_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_from_receive_firstchild_date | date | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| play_name | varchar(60) | YES |  | NULL |  |  |
| class | varchar(60) | YES |  | NULL |  |  |
| school | varchar(60) | YES |  | NULL |  |  |
| grad | varchar(60) | YES |  | NULL |  |  |
| informent_name | varchar(60) | YES |  | NULL |  |  |
| informent_interest | varchar(60) | YES |  | NULL |  |  |
| reason_problem | text | YES |  | NULL |  |  |
| fetch_treat_f | char(1) | YES |  | NULL |  |  |
| fetch_treat_m | char(1) | YES |  | NULL |  |  |
| fetch_treat_t | char(1) | YES |  | NULL |  |  |
| fetch_treat_o | char(1) | YES |  | NULL |  |  |
| fetch_treat_other | varchar(250) | YES |  | NULL |  |  |
| child | varchar(60) | YES |  | NULL |  |  |
| child_num | varchar(60) | YES |  | NULL |  |  |
| child_num_a | varchar(60) | YES |  | NULL |  |  |
| child_num_b | varchar(60) | YES |  | NULL |  |  |
| child_num_c | varchar(60) | YES |  | NULL |  |  |
| child_num_d | varchar(60) | YES |  | NULL |  |  |
| history | char(1) | YES |  | NULL |  |  |
| history_other | varchar(250) | YES |  | NULL |  |  |
| history_other_no | char(1) | YES |  | NULL |  |  |
| history_other_ny | char(1) | YES |  | NULL |  |  |
| history_private_a | varchar(60) | YES |  | NULL |  |  |
| history_private_a_other | varchar(60) | YES |  | NULL |  |  |
| history_private_a_no | varchar(60) | YES |  | NULL |  |  |
| history_private_a_ny | varchar(60) | YES |  | NULL |  |  |
| history_private_b | varchar(60) | YES |  | NULL |  |  |
| history_private_b_other | varchar(60) | YES |  | NULL |  |  |
| history_private_b_no | varchar(60) | YES |  | NULL |  |  |
| history_private_b_ny | varchar(60) | YES |  | NULL |  |  |
| history_private_c | varchar(60) | YES |  | NULL |  |  |
| history_private_c_other | varchar(60) | YES |  | NULL |  |  |
| history_private_c_no | varchar(60) | YES |  | NULL |  |  |
| history_private_c_ny | varchar(60) | YES |  | NULL |  |  |
| history_private_d | varchar(60) | YES |  | NULL |  |  |
| history_private_d_other | varchar(60) | YES |  | NULL |  |  |
| history_private_d_no | varchar(60) | YES |  | NULL |  |  |
| history_private_d_ny | varchar(60) | YES |  | NULL |  |  |
| history_private_e | varchar(60) | YES |  | NULL |  |  |
| history_private_e_other | varchar(60) | YES |  | NULL |  |  |
| history_private_e_no | varchar(60) | YES |  | NULL |  |  |
| history_private_e_ny | varchar(60) | YES |  | NULL |  |  |
| history_private_pcu | varchar(60) | YES |  | NULL |  |  |
| history_ovolution_a | varchar(60) | YES |  | NULL |  |  |
| history_ovolution_b | varchar(60) | YES |  | NULL |  |  |
| history_ovolution_c | varchar(60) | YES |  | NULL |  |  |
| history_ovolution_c_other | varchar(60) | YES |  | NULL |  |  |
| diliver_wg | varchar(60) | YES |  | NULL |  |  |
| complicafions_y | varchar(60) | YES |  | NULL |  |  |
| complicafions_y_other | varchar(60) | YES |  | NULL |  |  |
| complicafions_no | varchar(60) | YES |  | NULL |  |  |
| care_dilver | varchar(60) | YES |  | NULL |  |  |
| nature_a | varchar(60) | YES |  | NULL |  |  |
| nature_b | varchar(60) | YES |  | NULL |  |  |
| nature_c | varchar(60) | YES |  | NULL |  |  |
| nature_d | varchar(60) | YES |  | NULL |  |  |
| knowlage_a | varchar(60) | YES |  | NULL |  |  |
| knowlage_a_a | varchar(60) | YES |  | NULL |  |  |
| knowlage_a_a_other | varchar(60) | YES |  | NULL |  |  |
| knowlage_b | varchar(60) | YES |  | NULL |  |  |
| knowlage_b_a | varchar(60) | YES |  | NULL |  |  |
| knowlage_b_a_other | varchar(60) | YES |  | NULL |  |  |
| knowlage_c | varchar(60) | YES |  | NULL |  |  |
| knowlage_c_a | varchar(60) | YES |  | NULL |  |  |
| knowlage_c_a_other | varchar(60) | YES |  | NULL |  |  |
| name | varchar(60) | YES |  | NULL |  |  |
| psychiatric_from_receive_firstchild_famiry | varchar(60) | YES |  | NULL |  |  |
| results_irspection | varchar(60) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_from_receive_firstchild_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
