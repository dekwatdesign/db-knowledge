# `epidem_covid_spcm_place`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| epidem_covid_spcm_place_id | int(11) | NO | PRI | 0 |  |  |
| epidem_covid_spcm_place_name | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | epidem_covid_spcm_place_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "epidem_covid_spcm_place_id": 1,
    "epidem_covid_spcm_place_name": "สถานพยาบาล (โรงพยาบาล/คลินิก) "
  },
  {
    "epidem_covid_spcm_place_id": 2,
    "epidem_covid_spcm_place_name": "ศูนย์ตรวจทางห้องปฏิบัติการเอกชน"
  },
  {
    "epidem_covid_spcm_place_id": 3,
    "epidem_covid_spcm_place_name": "ชุมชน"
  },
  {
    "epidem_covid_spcm_place_id": 4,
    "epidem_covid_spcm_place_name": "ด่านควบคุมโรคระหว่างประเทศ"
  },
  {
    "epidem_covid_spcm_place_id": 5,
    "epidem_covid_spcm_place_name": "สถานกักกันที่รัฐกำหนด"
  },
  {
    "epidem_covid_spcm_place_id": 6,
    "epidem_covid_spcm_place_name": "ประชาชนตรวจด้วยตัวเอง"
  },
  {
    "epidem_covid_spcm_place_id": 7,
    "epidem_covid_spcm_place_name": "อื่นๆ"
  }
]
```
