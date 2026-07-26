# `epidem_covid_cluster`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| epidem_covid_cluster_id | int(11) | NO | PRI | 0 |  |  |
| epidem_covid_cluster_date | date | YES |  | NULL |  |  |
| epidem_covid_cluster_name | varchar(255) | YES |  | NULL |  |  |
| epidem_covid_disease_code | char(2) | YES |  | NULL |  |  |
| epidem_covid_cluster_type_id | int(11) | YES |  | NULL |  |  |
| address | varchar(150) | YES |  | NULL |  |  |
| chwpart | char(2) | YES |  | NULL |  |  |
| amppart | char(2) | YES |  | NULL |  |  |
| tmbpart | char(2) | YES |  | NULL |  |  |
| latitude | double(22,3) | YES |  | NULL |  |  |
| longitude | double(22,3) | YES |  | NULL |  |  |
| full_address | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | epidem_covid_cluster_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "epidem_covid_cluster_id": 1,
    "epidem_covid_cluster_date": "2021-12-22",
    "epidem_covid_cluster_name": "ทดสอบ Cluster งานแต่ง",
    "epidem_covid_disease_code": "01",
    "epidem_covid_cluster_type_id": 1,
    "address": "165/143",
    "chwpart": "24",
    "amppart": "08",
    "tmbpart": "01",
    "latitude": 13.653,
    "longitude": 101.44,
    "full_address": "165/143 จ.ฉะเชิงเทรา อ.สนามชัยเขต ต.คู้ยายหมี"
  },
  {
    "epidem_covid_cluster_id": 16,
    "epidem_covid_cluster_date": "2021-12-23",
    "epidem_covid_cluster_name": "ทดสอบ Cluster",
    "epidem_covid_disease_code": "03",
    "epidem_covid_cluster_type_id": 2,
    "address": "ทดสอบ",
    "chwpart": "13",
    "amppart": "05",
    "tmbpart": "01",
    "latitude": 14.049,
    "longitude": 100.406,
    "full_address": "ทดสอบ จ.ปทุมธานี อ.ลาดหลุมแก้ว ต.ระแหง"
  },
  {
    "epidem_covid_cluster_id": 97,
    "epidem_covid_cluster_date": "2022-01-05",
    "epidem_covid_cluster_name": "Lotus-2",
    "epidem_covid_disease_code": "92",
    "epidem_covid_cluster_type_id": 3,
    "address": "885",
    "chwpart": "15",
    "amppart": "06",
    "tmbpart": "12",
    "latitude": 14.653,
    "longitude": 100.329,
    "full_address": "885 อ.วิเศษชัยชาญ ต.ม่วงเตี้ย"
  },
  {
    "epidem_covid_cluster_id": 99,
    "epidem_covid_cluster_date": "2022-01-06",
    "epidem_covid_cluster_name": "สวนสราญรมย์",
    "epidem_covid_disease_code": "92",
    "epidem_covid_cluster_type_id": 2,
    "address": "77",
    "chwpart": "86",
    "amppart": "07",
    "tmbpart": "11",
    "latitude": 10.189,
    "longitude": 98.895,
    "full_address": "77 อ.สวี ต.เขาค่าย"
  },
  {
    "epidem_covid_cluster_id": 100,
    "epidem_covid_cluster_date": "2022-01-06",
    "epidem_covid_cluster_name": "Big C",
    "epidem_covid_disease_code": "92",
    "epidem_covid_cluster_type_id": 3,
    "address": "78/6",
    "chwpart": "86",
    "amppart": "01",
    "tmbpart": "12",
    "latitude": 10.491,
    "longitude": 99.052,
    "full_address": "78/6 อ.เมืองชุมพร ต.บ้านนา"
  },
  {
    "epidem_covid_cluster_id": 107,
    "epidem_covid_cluster_date": "2022-01-07",
    "epidem_covid_cluster_name": "Robinson",
    "epidem_covid_disease_code": "92",
    "epidem_covid_cluster_type_id": 3,
    "address": "8989",
    "chwpart": "17",
    "amppart": "06",
    "tmbpart": "03",
    "latitude": 14.94,
    "longitude": 100.345,
    "full_address": "8989 อ.อินทร์บุรี ต.ทับยา"
  },
  {
    "epidem_covid_cluster_id": 108,
    "epidem_covid_cluster_date": "2022-01-20",
    "epidem_covid_cluster_name": "งานแต่งต้อย+ติ่ง",
    "epidem_covid_disease_code": "92",
    "epidem_covid_cluster_type_id": 1,
    "address": "55/53",
    "chwpart": "14",
    "amppart": "01",
    "tmbpart": "20",
    "latitude": 14.352,
    "longitude": 100.54,
    "full_address": "55/53 จ.พระนครศรีอยุธยา อ.พระนครศรีอยุธยา ต.บ้านป้อม"
  },
  {
    "epidem_covid_cluster_id": 111,
    "epidem_covid_cluster_date": "2022-01-28",
    "epidem_covid_cluster_name": "ทดสอบงานแต่งเปิ้ล",
    "epidem_covid_disease_code": "92",
    "epidem_covid_cluster_type_id": 1,
    "address": "55/55",
    "chwpart": "14",
    "amppart": "04",
    "tmbpart": "01",
    "latitude": 14.192,
    "longitude": 100.483,
    "full_address": "55/55 จ.พระนครศรีอยุธยา อ.บางไทร ต.บางไทร"
  }
]
```
