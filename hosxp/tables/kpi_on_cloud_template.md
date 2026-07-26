# `kpi_on_cloud_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| kpi_on_cloud_template_id | varchar(250) | NO | PRI |  |  |  |
| kpi_on_cloud_template_report_name | varchar(250) | YES |  | NULL |  |  |
| kpi_on_cloud_template_sql_a | text | YES |  | NULL |  |  |
| kpi_on_cloud_template_view_a | varchar(50) | YES |  | NULL |  |  |
| kpi_on_cloud_template_keyfield_a | varchar(10) | YES |  | NULL |  |  |
| kpi_on_cloud_template_sql_b | text | YES |  | NULL |  |  |
| kpi_on_cloud_template_view_b | varchar(50) | YES |  | NULL |  |  |
| kpi_on_cloud_template_keyfield_b | varchar(10) | YES |  | NULL |  |  |
| kpi_on_cloud_template_kpibase | double(10,2) | YES |  | NULL |  |  |
| kpi_on_cloud_template_operation | varchar(30) | YES |  | NULL |  |  |
| kpi_on_cloud_template_user_update | varchar(10) | YES |  | NULL |  |  |
| kpi_on_cloud_template_lastupdate | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | kpi_on_cloud_template_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "kpi_on_cloud_template_id": "BMSHOSxPCUPsCloudKpiDMNewCaseFrame",
    "kpi_on_cloud_template_report_name": "อัตราป่วยรายใหม่จากเบาหวาน ต่อแสนประชากร",
    "kpi_on_cloud_template_sql_a": "select hn,regdate,begin_year from clinicmember \r\n where regdate BETWEEN \"2014-10-01\" and \"2015-09-30\" and begin_year BETWEEN 2557 and 2558 \r\n and clinic in(SELECT clinic FROM clinic WHERE name like \"%เบาหวาน%\") \r\n\r\n\r\n\r\n\r\n\r\n\r\n",
    "kpi_on_cloud_template_view_a": "kpi_clinicmember_dm_view",
    "kpi_on_cloud_template_keyfield_a": "hn",
    "kpi_on_cloud_template_sql_b": "select hn,cid,pname,fname,lname,birthday from patient \r\n where TIMESTAMPDIFF(year,birthday,\"2014-07-01\") BETWEEN \"15\" and \"59\"\r\n\r\n\r\n\r\n\r\n\r\n\r\n",
    "kpi_on_cloud_template_view_b": "kpi_patient_age15to59_count_view",
    "kpi_on_cloud_template_keyfield_b": "hn",
    "kpi_on_cloud_template_kpibase": 0.0,
    "kpi_on_cloud_template_operation": "greater than",
    "kpi_on_cloud_template_user_update": "a",
    "kpi_on_cloud_template_lastupdate": "2015-10-15 16:53:11"
  },
  {
    "kpi_on_cloud_template_id": "BMSHOSxPCUPsCloudKpiHTNewCaseFrame",
    "kpi_on_cloud_template_report_name": "อัตราป่วยรายใหม่จากความดันโลหิตสูง ต่อแสนประชากร",
    "kpi_on_cloud_template_sql_a": "select hn,regdate,begin_year from clinicmember \r\n where regdate BETWEEN \"2014-10-01\" and \"2015-09-30\" and begin_year BETWEEN 2557 and 2558 \r\n and clinic in(SELECT clinic FROM clinic WHERE name like \"%ความดัน%\")\r\n\r\n\r\n",
    "kpi_on_cloud_template_view_a": "kpi_clinicmember_ht_view",
    "kpi_on_cloud_template_keyfield_a": "hn",
    "kpi_on_cloud_template_sql_b": "select hn,cid,pname,fname,lname,birthday from patient \r\n where TIMESTAMPDIFF(year,birthday,\"2014-07-01\") BETWEEN \"15\" and \"59\" \r\n\r\n\r\n",
    "kpi_on_cloud_template_view_b": "kpi_patient_age15to59_count_view",
    "kpi_on_cloud_template_keyfield_b": "hn",
    "kpi_on_cloud_template_kpibase": 0.0,
    "kpi_on_cloud_template_operation": "greater than",
    "kpi_on_cloud_template_user_update": "a",
    "kpi_on_cloud_template_lastupdate": "2015-10-15 17:17:18"
  },
  {
    "kpi_on_cloud_template_id": "BMSHOSxPCUPsCloudKpiMOMDeathFrame",
    "kpi_on_cloud_template_report_name": "อัตรามารดาเสียชีวิต ไม่เกิน 15 ต่อแสนการเกิดมีชีพ",
    "kpi_on_cloud_template_sql_a": "select death_id, hn, death_date, death_diag_1, nopreg, death_preg_42_day \r\n from death where death_date between \"2014-10-01\" and \"2015-09-30\" \r\n and (nopreg = \"Y\" or death_preg_42_day = \"Y\")\r\n",
    "kpi_on_cloud_template_view_a": "kpi_mom_death_view",
    "kpi_on_cloud_template_keyfield_a": "death_id",
    "kpi_on_cloud_template_sql_b": "select hos_guid, hn, cid, pname, fname, lname, birthday, \r\n addrpart, moopart, tmbpart, amppart, chwpart, sex from patient  \r\n where birthday between \"2014-10-01\" and \"2015-09-30\" \r\n",
    "kpi_on_cloud_template_view_b": "kpi_births_view",
    "kpi_on_cloud_template_keyfield_b": "hos_guid",
    "kpi_on_cloud_template_kpibase": 15.0,
    "kpi_on_cloud_template_operation": "less than",
    "kpi_on_cloud_template_user_update": "a",
    "kpi_on_cloud_template_lastupdate": "2015-10-15 16:54:27"
  },
  {
    "kpi_on_cloud_template_id": "BMSHOSxPCUPsCloudKpiNewbornEMOFrame",
    "kpi_on_cloud_template_report_name": "ร้อยละของเด็กแรกเกิด - ต่ำกว่า 6 เดือน กินนมแม่อย่างเดียว",
    "kpi_on_cloud_template_sql_a": " select p.cid,concat(p.pname,p.fname,\" \",p.lname) as ptname , \r\n p.house_regist_type_id,h.address,h.road,v.village_moo,v.village_name,t.full_name as full_address_name,p.patient_hn, \r\n pn.person_nutrition_food_type_name,p.birthdate,aw.nutrition_date, \r\n TIMESTAMPDIFF(MONTH,DATE_FORMAT(p.birthdate,\"%Y-%m-%d\"),DATE_FORMAT(aw.nutrition_date,\"%Y-%m-%d\")) as age_month_nutrition, \r\n TIMESTAMPDIFF(MONTH,DATE_FORMAT(p.birthdate,\"%Y-%m-%d\"),DATE_FORMAT(NOW(),\"%Y-%m-%d\")) as age_month_now,a.person_wbc_id, \r\n t.chwpart,t.amppart,t.tmbpart  \r\n from person_wbc a   \r\n left outer join person_wbc_nutrition aw on aw.person_wbc_id = a.person_wbc_id    \r\n left outer join person_nutrition_food_type pn on pn.person_nutrition_food_type_id=aw.person_nutrition_food_type_id \r\n left outer join person p on p.person_id = a.person_id  \r\n left outer join house h on h.house_id = p.house_id  \r\n left outer join village v on v.village_id = p.village_id  \r\n left outer join thaiaddress t on t.addressid = v.address_id \r\n where (a.discharge<>\"Y\" or a.discharge is null) \r\n and concat(a.person_wbc_id,DATE_FORMAT(aw.nutrition_date,\"%Y%m%d\")) in  \r\n (\tselect concat(person_wbc_id,max(DATE_FORMAT(nutrition_date,\"%Y%m%d\"))) as aa  \r\n  \tfrom person_wbc_nutrition  \r\n  \twhere nutrition_date between \"2014-10-01\" and \"2015-09-30\"  \r\n \tgroup by person_wbc_id )   \r\n and aw.person_nutrition_food_type_id=\"1\" \r\n group by p.cid  \r\n having age_month_nutrition < 6 \r\n",
    "kpi_on_cloud_template_view_a": "kpi_newborn6m_emo_view",
    "kpi_on_cloud_template_keyfield_a": "cid",
    "kpi_on_cloud_template_sql_b": " select p.cid,concat(p.pname,p.fname,\" \",p.lname) as ptname , \r\n p.house_regist_type_id,h.address,h.road,v.village_moo,v.village_name,t.full_name as full_address_name,p.patient_hn, \r\n pn.person_nutrition_food_type_name,p.birthdate,aw.nutrition_date,  \r\n TIMESTAMPDIFF(MONTH,DATE_FORMAT(p.birthdate,\"%Y-%m-%d\"),DATE_FORMAT(aw.nutrition_date,\"%Y-%m-%d\")) as age_month_nutrition,  \r\n TIMESTAMPDIFF(MONTH,DATE_FORMAT(p.birthdate,\"%Y-%m-%d\"),DATE_FORMAT(NOW(),\"%Y-%m-%d\")) as age_month_now,a.person_wbc_id, \r\n t.chwpart,t.amppart,t.tmbpart \r\n from person_wbc a  \r\n left outer join person_wbc_nutrition aw on aw.person_wbc_id = a.person_wbc_id \r\n left outer join person_nutrition_food_type pn on pn.person_nutrition_food_type_id=aw.person_nutrition_food_type_id \r\n left outer join person p on p.person_id = a.person_id  \r\n left outer join house h on h.house_id = p.house_id \r\n left outer join village v on v.village_id = p.village_id  \r\n left outer join thaiaddress t on t.addressid = v.address_id  \r\n where (a.discharge<>\"Y\" or a.discharge is null)  \r\n and concat(a.person_wbc_id,DATE_FORMAT(aw.nutrition_date,\"%Y%m%d\")) in   \r\n (\tselect concat(person_wbc_id,max(DATE_FORMAT(nutrition_date,\"%Y%m%d\"))) as aa    \r\n  \tfrom person_wbc_nutrition    \r\n  \twhere nutrition_date between \"2014-10-01\" and \"2015-09-30\"  \r\n \t  group by person_wbc_id  \r\n ) \r\n group by p.cid  \r\n having age_month_nutrition < 6 \r\n",
    "kpi_on_cloud_template_view_b": "kpi_newborn6m_view",
    "kpi_on_cloud_template_keyfield_b": "cid",
    "kpi_on_cloud_template_kpibase": 50.0,
    "kpi_on_cloud_template_operation": "greater than or equal to",
    "kpi_on_cloud_template_user_update": "a",
    "kpi_on_cloud_template_lastupdate": "2015-10-15 16:54:52"
  },
  {
    "kpi_on_cloud_template_id": "BMSHOSxPCUPsCloudKpiPregnancyFirstCareFrame",
    "kpi_on_cloud_template_report_name": "ร้อยละของหญิงตั้งครรภ์ได้รับการฝากครรภ์ครั้งแรกเมื่ออายุครรภ์ <= 12 สัปดาห์",
    "kpi_on_cloud_template_sql_a": " select p.cid,n.preg_no,concat(p.pname,p.fname,\" \",p.lname) as ptname , \r\n p.birthdate,p.house_regist_type_id,h.address,h.road,v.village_moo,v.village_name,t.full_name as full_address_name,p.patient_hn, \r\n n.labor_date,n.edc,n.lmp,ps.anc_service_date,ps.pa_week,ls.labor_status_name,n.discharge, \r\n t.chwpart,t.amppart,t.tmbpart  \r\n from person_anc n \r\n left outer join person_anc_service ps on ps.person_anc_id = n.person_anc_id  \r\n left outer join labor_status ls on ls.labor_status_id=n.labor_status_id \r\n left outer join person p on n.person_id = p.person_id \r\n left outer join house h on p.house_id = h.house_id   \r\n left outer join village v on h.village_id = v.village_id  \r\n left outer join thaiaddress t on t.addressid = v.address_id  \r\n where n.labor_date between \"2014-10-01\" and \"2015-09-30\"  \r\n and n.labor_status_id =\"2\" \r\n and ps.pa_week <= 12 \r\n group by concat(p.cid,n.preg_no) \r\n",
    "kpi_on_cloud_template_view_a": "kpi_pregnancy_first_care_view",
    "kpi_on_cloud_template_keyfield_a": "cid",
    "kpi_on_cloud_template_sql_b": " select p.cid,n.preg_no,concat(p.pname,p.fname,\" \",p.lname) as ptname , \r\n p.birthdate,p.house_regist_type_id,h.address,h.road,v.village_moo,v.village_name,t.full_name as full_address_name,p.patient_hn, \r\n n.labor_date,n.edc,n.lmp,ls.labor_status_name,n.discharge, \r\n t.chwpart,t.amppart,t.tmbpart \r\n from person_anc n \r\n left outer join person p on n.person_id = p.person_id  \r\n left outer join labor_status ls on ls.labor_status_id=n.labor_status_id \r\n left outer join house h on p.house_id = h.house_id  \r\n left outer join village v on h.village_id = v.village_id  \r\n left outer join thaiaddress t on t.addressid = v.address_id \r\n where n.labor_date between \"2014-10-01\" and \"2015-09-30\" \r\n and n.labor_status_id =\"2\"  \r\n group by concat(p.cid,n.preg_no) \r\n",
    "kpi_on_cloud_template_view_b": "kpi_pregnancy_view",
    "kpi_on_cloud_template_keyfield_b": "cid",
    "kpi_on_cloud_template_kpibase": 60.0,
    "kpi_on_cloud_template_operation": "greater than or equal to",
    "kpi_on_cloud_template_user_update": "a",
    "kpi_on_cloud_template_lastupdate": "2015-10-15 16:55:20"
  },
  {
    "kpi_on_cloud_template_id": "BMSHOSxPCUPsCloudKpiNewbornDeathFrame",
    "kpi_on_cloud_template_report_name": "ลดอัตราการเสียชีวิตในโรงพยาบาลของทารกแรกเกิดน้ำหนักต่ำกว่า 2,500 กรัม ภายใน 28 วัน(ร้อยละ 5)",
    "kpi_on_cloud_template_sql_a": " select p.cid,concat(p.pname,p.fname,\" \",p.lname) as ptname , \r\n p.house_regist_type_id,p.birthdate,pd.death_date,datediff(pd.death_date,p.birthdate) as death_day,a.birth_weight, \r\n h.address,h.road,v.village_moo,v.village_name,t.full_name as full_address_name,p.patient_hn, \r\n t.chwpart,t.amppart,t.tmbpart\r\n from person_wbc a  \r\n left outer join person p on p.person_id = a.person_id   \r\n left outer join house h on h.house_id = p.house_id  \r\n left outer join village v on v.village_id = p.village_id  \r\n left outer join thaiaddress t on t.addressid = v.address_id \r\n inner join person_death pd on  pd.person_id=a.person_id \r\n where a.birth_weight < 2500 \r\n and datediff(pd.death_date,p.birthdate) < 28  \r\n and p.birthdate between \"2014-10-01\" and \"2015-09-30\" \r\n",
    "kpi_on_cloud_template_view_a": "kpi_newborn_death_view",
    "kpi_on_cloud_template_keyfield_a": "cid",
    "kpi_on_cloud_template_sql_b": " select p.cid,concat(p.pname,p.fname,\" \",p.lname) as ptname , \r\n p.house_regist_type_id,p.birthdate,a.birth_weight, \r\n h.address,h.road,v.village_moo,v.village_name,t.full_name as full_address_name,p.patient_hn, \r\n t.chwpart,t.amppart,t.tmbpart \r\n from person_wbc a  \r\n left outer join person p on p.person_id = a.person_id   \r\n left outer join house h on h.house_id = p.house_id   \r\n left outer join village v on v.village_id = p.village_id  \r\n left outer join thaiaddress t on t.addressid = v.address_id   \r\n where a.birth_weight < 2500 \r\n and p.birthdate between \"2014-10-01\" and \"2015-09-30\" \r\n and p.person_id not in (select person_id from person_death) \r\n",
    "kpi_on_cloud_template_view_b": "kpi_newborn_view",
    "kpi_on_cloud_template_keyfield_b": "cid",
    "kpi_on_cloud_template_kpibase": 5.0,
    "kpi_on_cloud_template_operation": "less than or equal to",
    "kpi_on_cloud_template_user_update": "a",
    "kpi_on_cloud_template_lastupdate": "2015-10-15 16:55:29"
  },
  {
    "kpi_on_cloud_template_id": "BMSHOSxPCUPsCloudKpiPercentSmokingInTeensFrame",
    "kpi_on_cloud_template_report_name": "ร้อยละผู้สูบบุหรี่ในวัยรุ่น อายุ 15-18 ปี",
    "kpi_on_cloud_template_sql_a": " select o.hos_guid,p.cid,o.hn,  concat(pname,fname,\" \",lname) as ptname,p.birthday,TIMESTAMPDIFF(year,p.birthday,\"2014-07-01\") as age,  o.vstdate,s.smoking_type_name  from opdscreen o  left join patient p on(o.hn=p.hn)  left join smoking_type s on(o.smoking_type_id=s.smoking_type_id)  where o.smoking_type_id not in(1,4) and o.smoking_type_id is not NULL  and TIMESTAMPDIFF(year,p.birthday,\"2014-07-01\") BETWEEN \"15\" and \"18\"  and o.vstdate BETWEEN \"2014-10-01\" and \"2015-09-30\" \r\n",
    "kpi_on_cloud_template_view_a": "kpi_patient_smoking_view",
    "kpi_on_cloud_template_keyfield_a": "hos_guid",
    "kpi_on_cloud_template_sql_b": " select hn,cid,concat(pname,fname,\" \",lname) as ptname,  birthday,TIMESTAMPDIFF(year,birthday,\"2014-07-01\") as age  from patient  where TIMESTAMPDIFF(year,birthday,\"2014-07-01\") BETWEEN \"15\" and \"18\"  \r\n",
    "kpi_on_cloud_template_view_b": "kpi_patient_age15to18_count_view",
    "kpi_on_cloud_template_keyfield_b": "hn",
    "kpi_on_cloud_template_kpibase": 10.0,
    "kpi_on_cloud_template_operation": "less than or equal to",
    "kpi_on_cloud_template_user_update": "a",
    "kpi_on_cloud_template_lastupdate": "2015-10-15 16:55:44"
  },
  {
    "kpi_on_cloud_template_id": "BMSHOSxPCUPsCloudKpiPregnancyTeenAgeFrame",
    "kpi_on_cloud_template_report_name": "ร้อยละของการตั้งครรภ์ซ้ำในวัยรุ่นอายุ 15-19 ปี",
    "kpi_on_cloud_template_sql_a": " select tt.* \r\n from( \r\n select p.cid,n.preg_no,concat(p.pname,p.fname,\" \",p.lname) as ptname ,p.house_regist_type_id,p.birthdate, \r\n h.address,h.road,v.village_moo,v.village_name,t.full_name as full_address_name,p.patient_hn, \r\n TIMESTAMPDIFF(YEAR,DATE_FORMAT(p.birthdate,\"%Y-%m-%d\"),DATE_FORMAT(n.labor_date,\"%Y-%m-%d\")) as age_year,  \r\n n.labor_date,n.edc,n.lmp,n.labor_status_id,ats.labor_status_name,n.discharge,  \r\n t.chwpart,t.amppart,t.tmbpart  \r\n from person_anc n   \r\n left outer join person p on n.person_id = p.person_id    \r\n left outer join house h on p.house_id = h.house_id  \r\n left outer join village v on h.village_id = v.village_id  \r\n left outer join labor_status ats on ats.labor_status_id = n.labor_status_id  \r\n left outer join thaiaddress t on t.addressid = v.address_id  \r\n where n.labor_date between \"2014-10-01\" and \"2015-09-30\"  \r\n and n.preg_no > 1 \r\n and n.labor_status_id in (\"2\",\"3\")  \r\n group by concat(p.cid,n.preg_no)  \r\n order by concat(p.cid,n.preg_no) desc \r\n ) as tt   \r\n group by concat(tt.cid) \r\n having tt.age_year between 15 and 19 \r\n",
    "kpi_on_cloud_template_view_a": "kpi_pregnancy_teenage_view",
    "kpi_on_cloud_template_keyfield_a": "cid",
    "kpi_on_cloud_template_sql_b": " select tt.*  \r\n from(  \r\n select p.cid,n.preg_no,concat(p.pname,p.fname,\" \",p.lname) as ptname ,p.house_regist_type_id,p.birthdate, \r\n h.address,h.road,v.village_moo,v.village_name,t.full_name as full_address_name,p.patient_hn, \r\n TIMESTAMPDIFF(YEAR,DATE_FORMAT(p.birthdate,\"%Y-%m-%d\"),DATE_FORMAT(n.labor_date,\"%Y-%m-%d\")) as age_year, \r\n n.labor_date,n.edc,n.lmp,n.labor_status_id,ats.labor_status_name,n.discharge,  \r\n t.chwpart,t.amppart,t.tmbpart \r\n from person_anc n       \r\n left outer join person p on n.person_id = p.person_id \r\n left outer join house h on p.house_id = h.house_id  \r\n left outer join village v on h.village_id = v.village_id  \r\n left outer join labor_status ats on ats.labor_status_id = n.labor_status_id  \r\n left outer join thaiaddress t on t.addressid = v.address_id  \r\n where n.labor_date between \"2014-10-01\" and \"2015-09-30\" \r\n and n.labor_status_id in (\"2\",\"3\") \r\n group by concat(p.cid,n.preg_no) \r\n order by concat(p.cid,n.preg_no) desc \r\n ) as tt  \r\n group by concat(tt.cid) \r\n having tt.age_year between 15 and 19 \r\n",
    "kpi_on_cloud_template_view_b": "kpi_teenage_view",
    "kpi_on_cloud_template_keyfield_b": "cid",
    "kpi_on_cloud_template_kpibase": 10.0,
    "kpi_on_cloud_template_operation": "less than or equal to",
    "kpi_on_cloud_template_user_update": "a",
    "kpi_on_cloud_template_lastupdate": "2015-10-15 16:55:52"
  }
]
```
