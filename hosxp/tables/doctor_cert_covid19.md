# `doctor_cert_covid19`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_cert_covid19_id | int(11) | NO | PRI | 0 |  |  |
| doctor_cert_id | int(11) | YES | UNI | NULL |  |  |
| moph_certificate_code | varchar(50) | YES |  | NULL |  |  |
| moph_certificate_serial_no | varchar(15) | YES |  | NULL |  |  |
| patient_name | varchar(150) | YES |  | NULL |  |  |
| patient_name_english | varchar(150) | YES |  | NULL |  |  |
| patient_sex_name | varchar(10) | YES |  | NULL |  |  |
| patient_sex_name_english | varchar(10) | YES |  | NULL |  |  |
| patient_date_of_birth | varchar(100) | YES |  | NULL |  |  |
| patient_date_of_birth_english | varchar(100) | YES |  | NULL |  |  |
| patient_cid | varchar(20) | YES |  | NULL |  |  |
| patient_passport_no | varchar(20) | YES |  | NULL |  |  |
| patient_address | varchar(250) | YES |  | NULL |  |  |
| patient_address_english | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_cert_id | doctor_cert_id | yes | 1 |
| PRIMARY | doctor_cert_covid19_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "doctor_cert_covid19_id": 1,
    "doctor_cert_id": 117,
    "moph_certificate_code": "{FB5F5C34-E742-436B-BB0A-7B8670CDAC4A}",
    "moph_certificate_serial_no": "0001759093",
    "patient_name": "[MASKED_FULLNAME]",
    "patient_name_english": "",
    "patient_sex_name": "ชาย",
    "patient_sex_name_english": "MALE",
    "patient_date_of_birth": "12 ธันวาคม 2517",
    "patient_date_of_birth_english": "12 December 1974",
    "patient_cid": "1xxxxxxxxxxxx",
    "patient_passport_no": "",
    "patient_address": "64/5 หมู่ 4 ตำบลบางเมืองใหม่ อำเภอเมืองสมุทรปราการ จังหวัดสมุทรปราการ",
    "patient_address_english": ""
  },
  {
    "doctor_cert_covid19_id": 2,
    "doctor_cert_id": 118,
    "moph_certificate_code": "{5202E81D-18B4-48A7-AC4C-5A029F704312}",
    "moph_certificate_serial_no": "0001759108",
    "patient_name": "[MASKED_FULLNAME]",
    "patient_name_english": "",
    "patient_sex_name": "ชาย",
    "patient_sex_name_english": "MALE",
    "patient_date_of_birth": "10 พฤษภาคม 2507",
    "patient_date_of_birth_english": "10 May 1964",
    "patient_cid": "1xxxxxxxxxxxx",
    "patient_passport_no": "",
    "patient_address": "10 หมู่ - ถนน - แขวงคลองต้นไทร เขตเขตคลองสาน จังหวัดกรุงเทพมหานคร",
    "patient_address_english": ""
  },
  {
    "doctor_cert_covid19_id": 3,
    "doctor_cert_id": 119,
    "moph_certificate_code": "{62F64B2E-ACC9-40CA-A9A5-5AEED2FCCE31}",
    "moph_certificate_serial_no": "0001759104",
    "patient_name": "[MASKED_FULLNAME]",
    "patient_name_english": "",
    "patient_sex_name": "ชาย",
    "patient_sex_name_english": "MALE",
    "patient_date_of_birth": "30 มกราคม 2517",
    "patient_date_of_birth_english": "30 January 1974",
    "patient_cid": "1xxxxxxxxxxxx",
    "patient_passport_no": "",
    "patient_address": "134/206 หมู่ 5 ตำบลแพรกษา อำเภอเมืองสมุทรปราการ จังหวัดสมุทรปราการ",
    "patient_address_english": ""
  },
  {
    "doctor_cert_covid19_id": 4,
    "doctor_cert_id": 120,
    "moph_certificate_code": "{07DB43E2-2BF3-4F2E-A058-B5CC1A8C1A95}",
    "moph_certificate_serial_no": "0001759097",
    "patient_name": "[MASKED_FULLNAME]",
    "patient_name_english": "",
    "patient_sex_name": "หญิง",
    "patient_sex_name_english": "FEMALE",
    "patient_date_of_birth": "9 มกราคม 2532",
    "patient_date_of_birth_english": "9 January 1989",
    "patient_cid": "1xxxxxxxxxxxx",
    "patient_passport_no": "",
    "patient_address": "64/165 หมู่ 4 ตำบลบางเมือง อำเภอเมืองสมุทรปราการ จังหวัดสมุทรปราการ",
    "patient_address_english": ""
  },
  {
    "doctor_cert_covid19_id": 5,
    "doctor_cert_id": 121,
    "moph_certificate_code": "{AF4892BD-14CE-4F6E-A1FD-2F892E151D57}",
    "moph_certificate_serial_no": "0001759099",
    "patient_name": "[MASKED_FULLNAME]",
    "patient_name_english": "",
    "patient_sex_name": "หญิง",
    "patient_sex_name_english": "FEMALE",
    "patient_date_of_birth": "21 กรกฎาคม 2524",
    "patient_date_of_birth_english": "21 July 1981",
    "patient_cid": "1xxxxxxxxxxxx",
    "patient_passport_no": "",
    "patient_address": "119/8 หมู่ 6 ตำบลบางเมืองใหม่ อำเภอเมืองสมุทรปราการ จังหวัดสมุทรปราการ",
    "patient_address_english": ""
  },
  {
    "doctor_cert_covid19_id": 6,
    "doctor_cert_id": 122,
    "moph_certificate_code": "{88CD720B-C280-4BC2-82AB-F7C400EBC373}",
    "moph_certificate_serial_no": "0001759100",
    "patient_name": "[MASKED_FULLNAME]",
    "patient_name_english": "",
    "patient_sex_name": "หญิง",
    "patient_sex_name_english": "FEMALE",
    "patient_date_of_birth": "13 กรกฎาคม 2523",
    "patient_date_of_birth_english": "13 July 1980",
    "patient_cid": "1xxxxxxxxxxxx",
    "patient_passport_no": "",
    "patient_address": "99/193 หมู่ 6 ถนน มบ.เด่นชัย ตำบลบางเมือง อำเภอเมืองสมุทรปราการ จังหวัดสมุทรปราการ",
    "patient_address_english": ""
  },
  {
    "doctor_cert_covid19_id": 7,
    "doctor_cert_id": 123,
    "moph_certificate_code": "{DF910D71-7AFE-4A59-A9DC-81CA74D0DC9A}",
    "moph_certificate_serial_no": "",
    "patient_name": "[MASKED_FULLNAME]",
    "patient_name_english": "",
    "patient_sex_name": "หญิง",
    "patient_sex_name_english": "FEMALE",
    "patient_date_of_birth": "[MASKED_FULLNAME]",
    "patient_date_of_birth_english": "24 June 1969",
    "patient_cid": "1xxxxxxxxxxxx",
    "patient_passport_no": "",
    "patient_address": "19/72ก หมู่ 9 ตำบลบางเมืองใหม่ อำเภอเมืองสมุทรปราการ จังหวัดสมุทรปราการ",
    "patient_address_english": ""
  },
  {
    "doctor_cert_covid19_id": 8,
    "doctor_cert_id": 124,
    "moph_certificate_code": "{CB841D0A-FC76-4F80-945B-F8DCFCC28871}",
    "moph_certificate_serial_no": "0001759103",
    "patient_name": "[MASKED_FULLNAME]",
    "patient_name_english": "",
    "patient_sex_name": "ชาย",
    "patient_sex_name_english": "MALE",
    "patient_date_of_birth": "29 สิงหาคม 2513",
    "patient_date_of_birth_english": "29 August 1970",
    "patient_cid": "1xxxxxxxxxxxx",
    "patient_passport_no": "",
    "patient_address": "3003/94 หมู่ 1 ตำบลสำโรงเหนือ อำเภอเมืองสมุทรปราการ จังหวัดสมุทรปราการ",
    "patient_address_english": ""
  }
]
```
