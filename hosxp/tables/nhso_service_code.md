# `nhso_service_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nhso_service_code_id | int(11) | NO | PRI | 0 |  |  |
| nhso_service_code | varchar(50) | YES |  | NULL |  |  |
| nhso_service_type_name | varchar(250) | YES |  | NULL |  |  |
| nhso_service_hosp_type_name | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | nhso_service_code_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "nhso_service_code_id": 1,
    "nhso_service_code": "PG0170001",
    "nhso_service_type_name": "การบริการการแพทย์ทางไกล(Tele-medicine)",
    "nhso_service_hosp_type_name": "คลินิกเวชกรรม"
  },
  {
    "nhso_service_code_id": 2,
    "nhso_service_code": "PG0060001",
    "nhso_service_type_name": "เข้ารับบริการรักษาทั่วไป (OPD/IPD/PP)",
    "nhso_service_hosp_type_name": "คลินิกการพยาบาล,คลินิกเวชกรรม,คลินิกแพทย์แผนไทย,คลินิกทันตกรรม"
  },
  {
    "nhso_service_code_id": 3,
    "nhso_service_code": "PG0110001",
    "nhso_service_type_name": "Self Isolation",
    "nhso_service_hosp_type_name": "รพ."
  },
  {
    "nhso_service_code_id": 4,
    "nhso_service_code": "PG0120001",
    "nhso_service_type_name": "UCEP PLUS (ผู้ป่วยกลุ่มอาการสีเหลืองและสีแดง)",
    "nhso_service_hosp_type_name": "รพ."
  },
  {
    "nhso_service_code_id": 5,
    "nhso_service_code": "PG0130001",
    "nhso_service_type_name": "บริการฟอกเลือดด้วยเครื่องไตเทียม(HD)",
    "nhso_service_hosp_type_name": "คลินิกการพยาบาล,คลินิกเวชกรรม"
  },
  {
    "nhso_service_code_id": 6,
    "nhso_service_code": "PG0150001",
    "nhso_service_type_name": "บริการดูแลอาการเจ็บป่วยเบื้องต้น(Common illnesses)",
    "nhso_service_hosp_type_name": "คลินิกการพยาบาล"
  },
  {
    "nhso_service_code_id": 7,
    "nhso_service_code": "PG0180001",
    "nhso_service_type_name": "บริการตรวจสุขภาพที่จำเป็นตามกลุ่มวัย",
    "nhso_service_hosp_type_name": "คลินิกเวชกรรม"
  }
]
```
