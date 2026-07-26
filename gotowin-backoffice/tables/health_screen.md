# `health_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HEALTH_SCREEN_ID | int | NO | PRI | NULL | auto_increment |  |
| HEALTH_SCREEN_YEAR | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_PERSON_ID | int | YES |  | NULL |  |  |
| HEALTH_SCREEN_HEIGHT | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_WEIGHT | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_BODY | varchar(10) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| HEALTH_SCREEN_FM_DIA | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_FM_BLOOD | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_FM_GOUT | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_FM_KIDNEY | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_FM_HEART | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_FM_BRAIN | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_FM_EMPHY | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_FM_UNKNOW | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_FM_OTHER | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_BS_DIA | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_BS_BLOOD | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_BS_GOUT | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_BS_KIDNEY | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_BS_HEART | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_BS_BRAIN | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_BS_EMPHY | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_BS_UNKNOW | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_BS_OTHER | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_H_1 | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_H_2 | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_H_3 | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_H_4 | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_H_5 | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_H_6 | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_H_7 | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_H_8 | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_H_9 | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_H_10 | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_H_11 | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_H_12 | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_H_13 | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_H_14 | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_H_15 | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_H_16 | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_H_17 | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_H_18 | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_H_19 | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_H_20 | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_H_21 | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_H_22 | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_H_23 | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_H_24 | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_H_25 | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_H_26 | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_H_27 | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_H_28 | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_H_HAVE | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_SMOK | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_SMOK_AMOUNT | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_SMOK_TYPE | varchar(50) | YES |  | NULL |  |  |
| HEALTH_SCREEN_SMOK_TIME | varchar(50) | YES |  | NULL |  |  |
| HEALTH_SCREEN_NOSMOK | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_USEDSMOK | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_DRINK | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_DRINK_AMOUNT | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_NODRINK | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_USEDDRINK | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_EXERCISE | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_FOOD | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_DRIVE | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_SEX | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_DATE | date | YES |  | NULL |  |  |
| HEALTH_SCREEN_AGE | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_STATUS | varchar(10) | YES |  | NULL |  |  |
| HEALTH_SCREEN_FOOD_1 | varchar(5) | YES |  | NULL |  |  |
| HEALTH_SCREEN_FOOD_2 | varchar(5) | YES |  | NULL |  |  |
| HEALTH_SCREEN_FOOD_3 | varchar(5) | YES |  | NULL |  |  |
| HEALTH_SCREEN_FOOD_4 | varchar(5) | YES |  | NULL |  |  |
| HEALTH_SCREEN_FOOD_5 | varchar(5) | YES |  | NULL |  |  |
| HEALTH_SCREEN_CON_DATE | date | YES |  | NULL |  |  |
| HEALTH_SCREEN_CON_TIME | time | YES |  | NULL |  |  |
| HEALTH_BODY_DATE | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | HEALTH_SCREEN_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
