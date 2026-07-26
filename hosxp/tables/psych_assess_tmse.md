# `psych_assess_tmse`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_assess_tmse_id | int(11) | NO | PRI | 0 |  |  |
| vn_an | varchar(13) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| psych_assess_tmse_date | date | YES |  | NULL |  |  |
| psych_assess_tmse_orie1_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_orie2_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_orie3_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_orie4_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_orie5_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_orie6_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_orie1_score | int(11) | YES |  | NULL |  |  |
| psych_assess_tmse_orie2_score | int(11) | YES |  | NULL |  |  |
| psych_assess_tmse_orie3_score | int(11) | YES |  | NULL |  |  |
| psych_assess_tmse_orie4_score | int(11) | YES |  | NULL |  |  |
| psych_assess_tmse_orie5_score | int(11) | YES |  | NULL |  |  |
| psych_assess_tmse_orie6_score | int(11) | YES |  | NULL |  |  |
| psych_assess_tmse_orie_sum | int(11) | YES |  | NULL |  |  |
| psych_assess_tmse_regis1_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_regis2_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_regis3_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_regis_score | int(11) | YES |  | NULL |  |  |
| psych_assess_tmse_regis_sum | int(11) | YES |  | NULL |  |  |
| psych_assess_tmse_att1_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_att2_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_att3_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_att4_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_att5_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_att_score | int(11) | YES |  | NULL |  |  |
| psych_assess_tmse_att_sum | int(11) | YES |  | NULL |  |  |
| psych_assess_tmse_cal1_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_cal2_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_cal3_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_cal_score | int(11) | YES |  | NULL |  |  |
| psych_assess_tmse_cal_sum | int(11) | YES |  | NULL |  |  |
| psych_assess_tmse_lang1_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_lang2_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_lang3_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_lang4_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_lang5_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_lang6_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_lang7_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_lang8_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_lang9_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_lang1_score | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_lang2_score | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_lang3_score | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_lang4_score | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_lang5_score | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_lang6_score | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_lang7_score | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_lang8_score | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_lang9_score | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_lang9_note | varchar(100) | YES |  | NULL |  |  |
| psych_assess_tmse_lang9_sum | int(11) | YES |  | NULL |  |  |
| psych_assess_tmse_recall1_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_recall2_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_recall3_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_tmse_recall_score | int(11) | YES |  | NULL |  |  |
| psych_assess_tmse_recall_sum | int(11) | YES |  | NULL |  |  |
| psych_assess_tmse_toltal_sum | int(11) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff_entry | varchar(50) | YES |  | NULL |  |  |
| date_entry | date | YES |  | NULL |  |  |
| staff_assessment | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn_an | vn_an | no | 1 |
| PRIMARY | psych_assess_tmse_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
